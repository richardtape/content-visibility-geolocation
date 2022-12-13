<?php
/**
 * Content Visibility Geolocation
 *
 * @package     ContentVisibilityGeolocation
 * @author      Richard Tape
 * @copyright   2021 Richard Tape
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Content Visibility Geolocation
 * Plugin URI:  https://richardtape.com/content-visibility/
 * Description: [Content Visibility Add-On] Show or hide your blocks to visitors from specific countries.
 * Version:     0.1.2
 * Author:      Richard Tape
 * Author URI:  https://richardtape.com
 * Text Domain: content-visibility-geolocation
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once plugin_dir_path( __FILE__ ) . 'includes/content-visibility-geolocation.php';
