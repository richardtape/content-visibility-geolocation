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

	wp_register_script(
		'content-visibility-geolocation',
		plugins_url( '/build/index.js', dirname( __FILE__ ) ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-editor',
			'wp-plugins',
			'wp-edit-post',
		),
		filemtime( plugin_dir_path( __DIR__ ) . 'build/index.js' ),
		true
	);

	$block_visibility_geolocation_args = array();

	wp_localize_script( 'content-visibility-geolocation', 'BlockVisibilityUserRole', $block_visibility_geolocation_args );

	wp_enqueue_script( 'content-visibility-geolocation' );

	wp_enqueue_style( 'content-visibility-geolocation-panel', plugins_url( 'build/index.css', dirname( __FILE__ ) ) );

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
 * Undocumented function
 *
 * @param array  $rule_value Which roles are selected for this block.
 * @param string $block_visibility Whether the block should be shown or hidden if the rule is true.
 * @param array  $block The full block.
 * @return bool  false if the block is to be removed. true if the block is to be potentially kept.
 */
function rule_logic_user_role( $rule_value, $block_visibility, $block ) {

	// Make sure we're not touching this block if no roles are set. keep this block to let others decide.
	if ( ! is_array( $rule_value ) || empty( $rule_value ) ) {
		return true;
	}

	// RULES HERE FOR GEOLOCATION.

	$SOME_VAR_CHANGE_ME = true;

	switch ( $block_visibility ) {
		case 'shown':
			return $SOME_VAR_CHANGE_ME;

		case 'hidden':
			return ! $SOME_VAR_CHANGE_ME;
	}

}//end rule_logic_user_role()
