=== Content Visibility Geolocation ===
Contributors: iamfriendly
Donate link: https://girlswhocode.com/
Tags: contentvisibility, block, content, visibility, geolocation, location
Requires at least: 5.0
Tested up to: 6.1.1
Stable tag: 0.1.2
Requires PHP: 7.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A geolocation add-on for [Content Visibility](https://wordpress.org/plugins/content-visibility/).

== Description ==

Content Visibility Geolocation is an add-on for [Content Visibility](https://wordpress.org/plugins/content-visibility/) - a plugin which allows you to decide when, where, and to whom each piece of your content is shown (or hidden!).

The geolocation add-on allows you to show or hide any of your content blocks to users visiting your site from any country of your choosing.

Need to only show a message to folks visiting from Canada 🇨🇦? No problems, eh.

How about showing a banner to your British 🇬🇧 visitors? You got it, guvnor. (I'm a Brit living in Canada ;) )

Note: This uses cookies to help reduce API calls. If that is something you need to tell your users about, please make sure to do just that :)

## Development

Development is mostly done on [github](https://github.com/richardtape/content-visibility-geolocation/issues/new) and releases are made there and here to the WordPress plugins directory.

== Frequently Asked Questions ==

= What if someone uses a VPN? =

People can be sneaky. This plugin uses a 3rd party IP-lookup API (which you can self-host should you desire) which gets location data based on the IP Address passed to it. If a user is using a VPN to mask where they are coming from, it is quite likely that the user will see content restricted to the country of their VPN connection.

= Does this store cookies in a user's browser? =

Yes. It does this in order to stop hitting an API for every page load. A cookie is stored for 1 week with information about where the person is visiting from.

= What's with the logo? =

It's a chameleon. A cool little creature which can change the way it appears - to make itself more or less visible. Seemed appropriate! Also, your suspicions are correct; a designer, I am not.

= Got a question? =

Let me know: [https://github.com/richardtape/content-visibility-geolocation/issues/new](https://github.com/richardtape/content-visibility-geolocation/issues/new)

== Screenshots ==
1. Showing the content visibility geolocation controls in the content editor sidebar

== Changelog ==

= 0.1.2 =
* WP 6.1.1 compatibility.
* Fixed warning on widgets screen.

= 0.1.1 =
* Added indicator to show when a country is selected to more easily determine when a block has rules.
* WP 5.8.0 compatibility.

= 0.1.0 =
* First public release.

== Upgrade Notice ==

None yet.