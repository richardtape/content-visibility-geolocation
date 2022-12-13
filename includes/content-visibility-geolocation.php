<?php
/**
 * Main loader file for Content Visibility Geolocation Add-on.
 *
 * @package ContentVisibilityGeolocation
 */

namespace RichardTape\ContentVisibilityGeolocation;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Use the content_visibility_enqueue_editor_assets action to load our assets so we know we're loading when and where we should be.
add_action( 'content_visibility_enqueue_editor_assets', __NAMESPACE__ . '\\enqueue_editor_assets', 30 );

/**
 * Enqueue script and style assets used in the editor.
 *
 * @since 1.0.0
 */
function enqueue_editor_assets() { // phpcs:ignore

	$prereqs = array(
		'wp-blocks',
		'wp-i18n',
		'wp-element',
		'wp-plugins',
		'wp-dom-ready',
	);

	// The 5.8 widgets screen requires a special editor?! Feelsbadman.
	$CVEditor = new \RichardTape\ContentVisibility\Editor();
	if ( $CVEditor->on_widgets_screen() ) {
		$prereqs[] = 'wp-edit-widgets';
	} else {
		$prereqs[] = 'wp-editor';
	}

	wp_register_script(
		'content-visibility-geolocation',
		plugins_url( '/build/index.js', dirname( __FILE__ ) ),
		$prereqs,
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.js' ),
		true
	);

	// Grab our countries list and make it available to our JS.
	require_once plugin_dir_path( __FILE__ ) . 'external/countries.php';
	$countries = get_country_list();

	$block_visibility_geolocation_args = array(
		'countries' => $countries,
	);

	wp_localize_script( 'content-visibility-geolocation', 'BlockVisibilityGeolocation', $block_visibility_geolocation_args );

	wp_enqueue_script( 'content-visibility-geolocation' );

	wp_enqueue_style(
		'content-visibility-geolocation-panel',
		plugins_url( 'build/index.css', dirname( __FILE__ ) ),
		array(),
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.css' ),
		'all'
	);

}//end enqueue_editor_assets()


add_filter( 'content_visibility_rule_types_and_callbacks', __NAMESPACE__ . '\\add_rule_type_and_callback' );

/**
 * Register our rule type to enable us to provide the logic callback.
 *
 * @param array $default_rule_types_and_callbacks Existing rules and callbacks.
 * @return array modified rule types and callbacks with ours added.
 */
function add_rule_type_and_callback( $default_rule_types_and_callbacks ) {

	$default_rule_types_and_callbacks['geolocation'] = __NAMESPACE__ . '\rule_logic_geolocation';

	return $default_rule_types_and_callbacks;

}//end add_rule_type_and_callback()


/**
 * Logic to determine whether to show or hide a block based on the current user's country, and the settings for this block.
 *
 * @param array  $rule_value Which countries are selected for this block.
 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
 * @param array  $block The full block.
 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
 */
function rule_logic_geolocation( $rule_value, $block_visibility, $block ) {

	// Make sure we're not touching this block if no countries are set. keep this block to let others decide.
	if ( ! is_array( $rule_value ) || empty( $rule_value ) ) {
		return true;
	}

	if ( ! isset( $rule_value['geolocation'] ) || ! is_array( $rule_value['geolocation'] ) ) {
		return true;
	}

	// Get the current user's country. This either comes from a cookie that's set or, if it's the first
	// page load, it's from an API.
	$users_country = sanitize_text_field( get_users_country() );

	// Bail if we can't determine the user's country.
	if ( empty( $users_country ) ) {
		return true;
	}

	// Filter the array just so we have the county codes.
	$countries_for_block = array_column( $rule_value['geolocation'], 'value' );

	if ( ! is_array( $countries_for_block ) || empty( $countries_for_block ) ) {
		return true;
	}

	$users_country_is_in_block_list = false;

	// Ensure the country code is encoded, can be an issue on first load without a cookie.
	if ( strlen( $users_country ) <= 4 ) {
		$users_country = encode_country_code( $users_country );
	}

	if ( in_array( $users_country, array_values( $countries_for_block ) ) ) { // phpcs:ignore
		$users_country_is_in_block_list = true;
	}

	switch ( $block_visibility ) {
		case 'shown':
			return $users_country_is_in_block_list;

		case 'hidden':
			return ! $users_country_is_in_block_list;
	}

}//end rule_logic_geolocation()


add_action( 'init', __NAMESPACE__ . '\\init__set_cookies' );

/**
 * On init we test to see if we already have a country cookie for this user. If we do, we bail as
 * early as possible. If we don't, we hit up the API one time to find the user's country code,
 * and then store that as a cookie 'content_visibility_country_code'
 *
 * @return null
 */
function init__set_cookies() {

	if ( is_admin() ) {
		return;
	}

	// Test to see if we have a cookie already saved which contains the user's country code.
	if ( cv_cookie_exists( 'content_visibility_country_code' ) ) {
		return;
	}

	// Using the user's IP Address to determine their country code.
	$users_country_from_api = get_users_country_from_api();

	// Security through obscurity, but it's better than simply allowing someone to set the cookie value directly.
	$users_country_from_api = encode_country_code( $users_country_from_api );

	// We get false back if the IP is invalid or we can't determine the country correctly.
	if ( false === $users_country_from_api ) {
		return;
	}

	cv_set_cookie(
		'content_visibility_country_code',
		$users_country_from_api,
		time() + WEEK_IN_SECONDS,
		COOKIEPATH,
		COOKIE_DOMAIN,
		true,  // Secure cookie.
		false, // Not HTTP only.
		'Lax'  // Better for multisite.
	);

}//end init__set_cookies()


/**
 * (Determine and) returns the country code for the current user. We first check for the existence of a cookie
 * which is set the first time a user visit's a page which requires geolocation checking. If the cookie exists,
 * we return the value set in the cookie. If the cookie doesn't exist, we hit an API with the current user's IP
 * address to determine the country. This is then set in a cookie, and returned.
 *
 * @return string The country code for the current user or an empty string on failure.
 */
function get_users_country() {

	// Ensure we have access to the cookie library.
	if ( ! class_exists( '\Delight\Cookie\Cookie' ) ) {
		require_once plugin_dir_path( __FILE__ ) . 'external/cookie.php';
	}

	// Test to see if we have a cookie already saved which contains the user's country code.
	if ( cv_cookie_exists( 'content_visibility_country_code' ) ) {
		return cv_get_cookie( 'content_visibility_country_code' );
	}

	// There's no cookie, so we'll need to hit the API here.
	// Using the user's IP Address to determine their country code.
	$users_country_from_api = get_users_country_from_api();

	// We get false back if the IP is invalid or we can't determine the country correctly.
	if ( false === $users_country_from_api ) {
		return '';
	}

	return $users_country_from_api;

}//end get_users_country()


/**
 * Rather than just dumping the user's 2-letter country code into a cookie which could be fairly easy to change, we encode
 * the country value. It's not designed to be the most secure thing in the world, but it's better than just allowing someone
 * to very easily change the code.
 *
 * If someone is willing to run the encoded value through a md5 cracker, then they'll just use a VPN. This is merely a
 * deterrent.
 *
 * Using PHP's native password_hash is too slow considering we need to do it for every country.
 *
 * @param string $country_code The 2-letter country code to encode.
 *
 * @return string The encoded country code value.
 */
function encode_country_code( $country_code ) {

	return md5( NONCE_SALT . $country_code );

}//end encode_country_code()


/**
 * Using the current user's IP Address we hit an API to determine the user's country code.
 *
 * Currently we only support the https://ipgeolocationapi.com/ to determine the current user's IP address, however,
 * in the future we may support others, so we're pulling this out into its own function.
 *
 * This function contains several filters which allow for overriding or setting certain items. Each filter is documented.
 *
 * @return string|false The country code for the current user. False if an invalid IP address or we can't determine the country.
 */
function get_users_country_from_api() {

	$ip_address = get_ip_address();

	/**
	* The current user's IP address.
	*
	* @since 0.1.0
	*
	* @param string $ip_address The current user's IP Address.
	*/
	$ip_address = apply_filters( 'content_visibility_geolocation_users_ip_address', $ip_address );

	// As well as the above filter, we allow a complete override using a constant.
	if ( defined( 'CONTENT_VISIBILITY_GEOLOCATION_USERS_IP_ADDRESS' ) && ! empty( constant( 'CONTENT_VISIBILITY_GEOLOCATION_USERS_IP_ADDRESS' ) ) ) {
		$ip_address = constant( 'CONTENT_VISIBILITY_GEOLOCATION_USERS_IP_ADDRESS' );
	}

	/**
	* A way to short circuit, or circumvent, this function. Returning any non-false value will cause this function to
	* return whatever value is passed in this filter. Ensure that it is a country code, all caps.
	*
	* @since 0.1.0
	*
	* @param bool   $short_circuit Whether to short-circuit this function or not.
	* @param string $ip_address    The current user's IP Address.
	*/
	$short_circuit = apply_filters( 'content_visibility_geolocation_pre_get_users_country_from_api', false, $ip_address );

	if ( false !== $short_circuit ) {
		return $short_circuit;
	}

	// Ensure we have a valid IP Address.
	if ( ! filter_var( $ip_address, FILTER_VALIDATE_IP ) ) {
		return false;
	}

	/**
	* The URL to the remote API we hit to determine a user's country from their IP Address.
	*
	* This would, for example, allow you to host your own copy of the geolocationapi that we use and substitute the URL here.
	*
	* @since 0.1.0
	*
	* @param string $api_url    The API url including protocol.
	* @param string $ip_address The current user's IP Address.
	*/
	$api_url = apply_filters( 'content_visibility_geolocation_remote_api_url', 'https://api.ipgeolocationapi.com/geolocate/', $ip_address );

	$url = $api_url . $ip_address;

	/**
	* The URL used as part of the wp_remote_get() request. By default this is the remote API url with the user's IP address appended.
	*
	* @since 0.1.0
	*
	* @param string $url        The url for the request, by default this is the API URL with the IP Address appended.
	* @param string $api_url    The API url including protocol.
	* @param string $ip_address The current user's IP Address.
	*/
	$url = apply_filters( 'content_visibility_geolocation_request_url', $url, $api_url, $ip_address );

	$get_args = array(
		'httpversion' => '1.1',
	);

	/**
	* The arguments used as the 2nd parameter of the wp_remote_get() request
	*
	* @since 0.1.0
	*
	* @param array  $get_args   The request args for wp_remote_get(). Defaults to ensuring the HTTP Version used is 1.1
	* @param string $url        The url for the request, by default this is the API URL with the IP Address appended.
	* @param string $api_url    The API url including protocol.
	* @param string $ip_address The current user's IP Address.
	*/
	$get_args = apply_filters( 'content_visibility_geolocation_remote_api_request_args', $get_args, $url, $api_url, $ip_address );

	/**
	* Fired before a call to the external API is made.
	*
	* @since 0.1.0
	*
	* @param string $url        The url for the request, by default this is the API URL with the IP Address appended.
	* @param array  $get_args   The request args for wp_remote_get(). Defaults to ensuring the HTTP Version used is 1.1
	* @param string $ip_address The current user's IP Address.
	*/
	do_action( 'content_visibility_geolocation_pre_wp_remote_get', $url, $get_args, $ip_address );

	$response     = wp_remote_get( esc_url_raw( $url ), $get_args );
	$api_response = json_decode( wp_remote_retrieve_body( $response ), true );

	if ( ! is_array( $api_response ) || empty( $api_response ) || ! isset( $api_response['alpha2'] ) ) {
		return false;
	}

	$users_country = sanitize_text_field( $api_response['alpha2'] );

	return $users_country;

}//end get_users_country_from_api()


/**
 * Get the IP Address of the current user.
 * Source: https://itman.in/en/how-to-get-client-ip-address-in-php/
 *
 * @return string The user's IP address.
 */
function get_ip_address() {

	// check for shared internet/ISP IP.
	if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
		return filter_var( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ), FILTER_VALIDATE_IP );
	}

	// check for IPs passing through proxies.
	if ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
		// check if multiple ips exist in var.
		if ( strpos( filter_var( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ), FILTER_VALIDATE_IP ), ',' ) !== false ) {
			$iplist = explode( ',', filter_var( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ), FILTER_VALIDATE_IP ) );
			foreach ( $iplist as $ip ) {
				return $ip;
			}
		} else {
			if ( filter_var( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ), FILTER_VALIDATE_IP ) ) {
				return filter_var( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ), FILTER_VALIDATE_IP );
			}
		}
	}

	if ( ! empty( $_SERVER['HTTP_X_FORWARDED'] ) ) {
		return filter_var( wp_unslash( $_SERVER['HTTP_X_FORWARDED'] ), FILTER_VALIDATE_IP );
	}

	if ( ! empty( $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'] ) ) {
		return filter_var( wp_unslash( $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'] ), FILTER_VALIDATE_IP );
	}

	if ( ! empty( $_SERVER['HTTP_FORWARDED_FOR'] ) ) {
		return filter_var( wp_unslash( $_SERVER['HTTP_FORWARDED_FOR'] ), FILTER_VALIDATE_IP );
	}

	if ( ! empty( $_SERVER['HTTP_FORWARDED'] ) ) {
		return filter_var( wp_unslash( $_SERVER['HTTP_FORWARDED'] ), FILTER_VALIDATE_IP );
	}

	// return unreliable ip since all else failed.
	if ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
		return filter_var( wp_unslash( $_SERVER['REMOTE_ADDR'] ), FILTER_VALIDATE_IP );
	}

	/**
	* We've tried our best to get the user's IP Address but everything we have tried has failed. This filter is
	* the last resort and allows an add-on to force an IP address in this situation.
	*
	* @since 0.1.0
	*
	* @param string|bool $ip_address The IP Address for the user. False by default.
	*/
	return apply_filters( 'content_visibility_geolocation_get_ip_address_last_resort', false );

}//end get_ip_address()


/*
 * Begin abstraction layer for external Cookie library to ensure WordPress data is sanitized, validated
 * and escaped. This enables us to keep the third-party cookie library untouched, yet pass around data
 * safely.
 *
 * Thank you to the plugins repo review team for catching this which helps me keep user's site's
 * secure.
 */

/**
 * Test if a cookie with the passed cookie key exists.
 *
 * Wrapper function for the Delight Cookie library, allowing us to keep that external package untouched
 * and provide an extra level of sanitization and validation for our WordPress side of things.
 *
 * @param string $cookie_key The key used for the name of the cookie.
 * @return bool  false if the cookie is not set. True otherwise.
 */
function cv_cookie_exists( $cookie_key ) {

	// Ensure we have access to the cookie library.
	if ( ! class_exists( '\Delight\Cookie\Cookie' ) ) {
		require_once plugin_dir_path( __FILE__ ) . 'external/cookie.php';
	}

	return (bool) \Delight\Cookie\Cookie::exists( sanitize_text_field( $cookie_key ) );

}//end cv_cookie_exists()


/**
 * Fetch the passed cookie key value.
 *
 * Wrapper function for the Delight Cookie library, allowing us to keep that external package untouched
 * and provide an extra level of sanitization and validation for our WordPress side of things.
 *
 * @param string $cookie_key The key used for the name of the cookie.
 * @return mixed the value from the requested cookie or the default value
 */
function cv_get_cookie( $cookie_key ) {

	// Ensure we have access to the cookie library.
	if ( ! class_exists( '\Delight\Cookie\Cookie' ) ) {
		require_once plugin_dir_path( __FILE__ ) . 'external/cookie.php';
	}

	return esc_html( \Delight\Cookie\Cookie::get( sanitize_text_field( $cookie_key ) ) );

}//end cv_get_cookie()

/**
 * Wrapper function for the Delight Cookie library, allowing us to keep that external package untouched
 * and provide an extra level of sanitization and validation for our WordPress side of things.
 *
 * @param string      $name the name of the cookie which is also the key for future accesses via `$_COOKIE[...]`.
 * @param mixed|null  $value the value of the cookie that will be stored on the client's machine.
 * @param int         $expiration the Unix timestamp indicating the time that the cookie will expire at, i.e. usually `time() + $seconds`.
 * @param string|null $path the path on the server that the cookie will be valid for (including all sub-directories), e.g. an empty string for the current directory or `/` for the root directory.
 * @param string|null $domain the domain that the cookie will be valid for (including subdomains) or `null` for the current host (excluding subdomains).
 * @param bool        $secure indicates that the cookie should be sent back by the client over secure HTTPS connections only.
 * @param bool        $http indicates that the cookie should be accessible through the HTTP protocol only and not through scripting languages.
 * @param string|null $same_site indicates that the cookie should not be sent along with cross-site requests (either `null`, `None`, `Lax` or `Strict`).
 * @return bool whether the cookie header has successfully been sent (and will *probably* cause the client to set the cookie)
 */
function cv_set_cookie( $name, $value, $expiration, $path, $domain, $secure, $http, $same_site ) {

	// Ensure we have access to the cookie library.
	if ( ! class_exists( '\Delight\Cookie\Cookie' ) ) {
		require_once plugin_dir_path( __FILE__ ) . 'external/cookie.php';
	}

	return (bool) \Delight\Cookie\Cookie::setcookie(
		sanitize_text_field( $name ),
		sanitize_text_field( $value ),
		absint( $expiration ),
		COOKIEPATH, // Force COOKIEPATH as that is trusted.
		COOKIE_DOMAIN, // Force COOKIEDOMAIN as that is trusted.
		filter_var( $secure, FILTER_VALIDATE_BOOLEAN ),  // Secure cookie.
		filter_var( $http, FILTER_VALIDATE_BOOLEAN ), // Not HTTP only.
		sanitize_text_field( $same_site )  // Better for multisite.
	);

}//end cv_set_cookie()
