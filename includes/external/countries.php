<?php
/**
 * A list of countries. Each flag icon is the emoji from the mac keyboard. I've really tried to make
 * sure I get the correct flag for each country - did my best to double check using google, wikipedia
 * etc. If I have something wrong, first I apologize, second please let me know and I'll fix it up as
 * soon as I can.
 *
 * @source https://raw.githubusercontent.com/umpirsky/country-list/master/data/en_GB/country.php
 *
 * @return array An array of arrays. Each sub-array contains the 'code' and 'name' of each country
*                and a flag which is the emoji representation of that flag.
 */
function get_country_list() {

	$countries = array(
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AF' ),
			'name' => 'Afghanistan',
			'flag' => '🇦🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AX' ),
			'name' => 'Åland Islands',
			'flag' => '🇦🇽',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AL' ),
			'name' => 'Albania',
			'flag' => '🇦🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'DZ' ),
			'name' => 'Algeria',
			'flag' => '🇩🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AS' ),
			'name' => 'American Samoa',
			'flag' => '🇦🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AD' ),
			'name' => 'Andorra',
			'flag' => '🇦🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AO' ),
			'name' => 'Angola',
			'flag' => '🇦🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AI' ),
			'name' => 'Anguilla',
			'flag' => '🇦🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AQ' ),
			'name' => 'Antarctica',
			'flag' => '🇦🇶',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AG' ),
			'name' => 'Antigua & Barbuda',
			'flag' => '🇦🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AR' ),
			'name' => 'Argentina',
			'flag' => '🇦🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AM' ),
			'name' => 'Armenia',
			'flag' => '🇦🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AW' ),
			'name' => 'Aruba',
			'flag' => '🇦🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AU' ),
			'name' => 'Australia',
			'flag' => '🇦🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AT' ),
			'name' => 'Austria',
			'flag' => '🇦🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AZ' ),
			'name' => 'Azerbaijan',
			'flag' => '🇦🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BS' ),
			'name' => 'Bahamas',
			'flag' => '🇧🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BH' ),
			'name' => 'Bahrain',
			'flag' => '🇧🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BD' ),
			'name' => 'Bangladesh',
			'flag' => '🇧🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BB' ),
			'name' => 'Barbados',
			'flag' => '🇧🇧',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BY' ),
			'name' => 'Belarus',
			'flag' => '🇧🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BE' ),
			'name' => 'Belgium',
			'flag' => '🇧🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BZ' ),
			'name' => 'Belize',
			'flag' => '🇧🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BJ' ),
			'name' => 'Benin',
			'flag' => '🇧🇯',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BM' ),
			'name' => 'Bermuda',
			'flag' => '🇧🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BT' ),
			'name' => 'Bhutan',
			'flag' => '🇧🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BO' ),
			'name' => 'Bolivia',
			'flag' => '🇧🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BA' ),
			'name' => 'Bosnia & Herzegovina',
			'flag' => '🇧🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BW' ),
			'name' => 'Botswana',
			'flag' => '🇧🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BV' ),
			'name' => 'Bouvet Island',
			'flag' => '🇳🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BR' ),
			'name' => 'Brazil',
			'flag' => '🇧🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IO' ),
			'name' => 'British Indian Ocean Territory',
			'flag' => '🇮🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VG' ),
			'name' => 'British Virgin Islands',
			'flag' => '🇻🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BN' ),
			'name' => 'Brunei',
			'flag' => '🇧🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BG' ),
			'name' => 'Bulgaria',
			'flag' => '🇧🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BF' ),
			'name' => 'Burkina Faso',
			'flag' => '🇧🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BI' ),
			'name' => 'Burundi',
			'flag' => '🇧🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KH' ),
			'name' => 'Cambodia',
			'flag' => '🇰🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CM' ),
			'name' => 'Cameroon',
			'flag' => '🇨🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CA' ),
			'name' => 'Canada',
			'flag' => '🇨🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CV' ),
			'name' => 'Cape Verde',
			'flag' => '🇨🇻',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BQ' ),
			'name' => 'Caribbean Netherlands',
			'flag' => '',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KY' ),
			'name' => 'Cayman Islands',
			'flag' => '🇰🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CF' ),
			'name' => 'Central African Republic',
			'flag' => '🇨🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TD' ),
			'name' => 'Chad',
			'flag' => '🇹🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CL' ),
			'name' => 'Chile',
			'flag' => '🇨🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CN' ),
			'name' => 'China',
			'flag' => '🇨🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CX' ),
			'name' => 'Christmas Island',
			'flag' => '🇨🇽',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CC' ),
			'name' => 'Cocos (Keeling) Islands',
			'flag' => '🇨🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CO' ),
			'name' => 'Colombia',
			'flag' => '🇨🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KM' ),
			'name' => 'Comoros',
			'flag' => '🇰🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CG' ),
			'name' => 'Congo - Brazzaville',
			'flag' => '🇨🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CD' ),
			'name' => 'Congo - Kinshasa',
			'flag' => '🇨🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CK' ),
			'name' => 'Cook Islands',
			'flag' => '🇨🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CR' ),
			'name' => 'Costa Rica',
			'flag' => '🇨🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CI' ),
			'name' => 'Côte d’Ivoire',
			'flag' => '🇨🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'HR' ),
			'name' => 'Croatia',
			'flag' => '🇭🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CU' ),
			'name' => 'Cuba',
			'flag' => '🇨🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CW' ),
			'name' => 'Curaçao',
			'flag' => '🇨🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CY' ),
			'name' => 'Cyprus',
			'flag' => '🇨🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CZ' ),
			'name' => 'Czechia',
			'flag' => '🇨🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'DK' ),
			'name' => 'Denmark',
			'flag' => '🇩🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'DJ' ),
			'name' => 'Djibouti',
			'flag' => '🇩🇯',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'DM' ),
			'name' => 'Dominica',
			'flag' => '🇩🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'DO' ),
			'name' => 'Dominican Republic',
			'flag' => '🇩🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'EC' ),
			'name' => 'Ecuador',
			'flag' => '🇪🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'EG' ),
			'name' => 'Egypt',
			'flag' => '🇪🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SV' ),
			'name' => 'El Salvador',
			'flag' => '🇸🇻',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GQ' ),
			'name' => 'Equatorial Guinea',
			'flag' => '🇬🇶',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ER' ),
			'name' => 'Eritrea',
			'flag' => '🇪🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'EE' ),
			'name' => 'Estonia',
			'flag' => '🇪🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SZ' ),
			'name' => 'Eswatini',
			'flag' => '🇸🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ET' ),
			'name' => 'Ethiopia',
			'flag' => '🇪🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'FK' ),
			'name' => 'Falkland Islands',
			'flag' => '🇫🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'FO' ),
			'name' => 'Faroe Islands',
			'flag' => '🇫🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'FJ' ),
			'name' => 'Fiji',
			'flag' => '🇫🇯',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'FI' ),
			'name' => 'Finland',
			'flag' => '🇫🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'FR' ),
			'name' => 'France',
			'flag' => '🇫🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GF' ),
			'name' => 'French Guiana',
			'flag' => '🇬🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PF' ),
			'name' => 'French Polynesia',
			'flag' => '🇵🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TF' ),
			'name' => 'French Southern Territories',
			'flag' => '🇹🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GA' ),
			'name' => 'Gabon',
			'flag' => '🇬🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GM' ),
			'name' => 'Gambia',
			'flag' => '🇬🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GE' ),
			'name' => 'Georgia',
			'flag' => '🇬🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'DE' ),
			'name' => 'Germany',
			'flag' => '🇩🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GH' ),
			'name' => 'Ghana',
			'flag' => '🇬🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GI' ),
			'name' => 'Gibraltar',
			'flag' => '🇬🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GR' ),
			'name' => 'Greece',
			'flag' => '🇬🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GL' ),
			'name' => 'Greenland',
			'flag' => '🇬🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GD' ),
			'name' => 'Grenada',
			'flag' => '🇬🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GP' ),
			'name' => 'Guadeloupe',
			'flag' => '🇬🇵',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GU' ),
			'name' => 'Guam',
			'flag' => '🇬🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GT' ),
			'name' => 'Guatemala',
			'flag' => '🇬🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GG' ),
			'name' => 'Guernsey',
			'flag' => '🇬🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GN' ),
			'name' => 'Guinea',
			'flag' => '🇬🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GW' ),
			'name' => 'Guinea-Bissau',
			'flag' => '🇬🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GY' ),
			'name' => 'Guyana',
			'flag' => '🇬🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'HT' ),
			'name' => 'Haiti',
			'flag' => '🇭🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'HM' ),
			'name' => 'Heard & McDonald Islands',
			'flag' => '',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'HN' ),
			'name' => 'Honduras',
			'flag' => '🇭🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'HK' ),
			'name' => 'Hong Kong SAR China',
			'flag' => '🇭🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'HU' ),
			'name' => 'Hungary',
			'flag' => '🇭🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IS' ),
			'name' => 'Iceland',
			'flag' => '🇮🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IN' ),
			'name' => 'India',
			'flag' => '🇮🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ID' ),
			'name' => 'Indonesia',
			'flag' => '🇮🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IR' ),
			'name' => 'Iran',
			'flag' => '🇮🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IQ' ),
			'name' => 'Iraq',
			'flag' => '🇮🇶',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IE' ),
			'name' => 'Ireland',
			'flag' => '🇮🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IM' ),
			'name' => 'Isle of Man',
			'flag' => '🇮🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IL' ),
			'name' => 'Israel',
			'flag' => '🇮🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'IT' ),
			'name' => 'Italy',
			'flag' => '🇮🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'JM' ),
			'name' => 'Jamaica',
			'flag' => '🇯🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'JP' ),
			'name' => 'Japan',
			'flag' => '🇯🇵',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'JE' ),
			'name' => 'Jersey',
			'flag' => '🇯🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'JO' ),
			'name' => 'Jordan',
			'flag' => '🇯🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KZ' ),
			'name' => 'Kazakhstan',
			'flag' => '🇰🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KE' ),
			'name' => 'Kenya',
			'flag' => '🇰🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KI' ),
			'name' => 'Kiribati',
			'flag' => '🇰🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KW' ),
			'name' => 'Kuwait',
			'flag' => '🇰🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KG' ),
			'name' => 'Kyrgyzstan',
			'flag' => '🇰🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LA' ),
			'name' => 'Laos',
			'flag' => '🇱🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LV' ),
			'name' => 'Latvia',
			'flag' => '🇱🇻',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LB' ),
			'name' => 'Lebanon',
			'flag' => '🇱🇧',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LS' ),
			'name' => 'Lesotho',
			'flag' => '🇱🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LR' ),
			'name' => 'Liberia',
			'flag' => '🇱🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LY' ),
			'name' => 'Libya',
			'flag' => '🇱🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LI' ),
			'name' => 'Liechtenstein',
			'flag' => '🇱🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LT' ),
			'name' => 'Lithuania',
			'flag' => '🇱🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LU' ),
			'name' => 'Luxembourg',
			'flag' => '🇱🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MO' ),
			'name' => 'Macao SAR China',
			'flag' => '🇲🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MG' ),
			'name' => 'Madagascar',
			'flag' => '🇲🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MW' ),
			'name' => 'Malawi',
			'flag' => '🇲🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MY' ),
			'name' => 'Malaysia',
			'flag' => '🇲🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MV' ),
			'name' => 'Maldives',
			'flag' => '🇲🇻',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ML' ),
			'name' => 'Mali',
			'flag' => '🇲🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MT' ),
			'name' => 'Malta',
			'flag' => '🇲🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MH' ),
			'name' => 'Marshall Islands',
			'flag' => '🇲🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MQ' ),
			'name' => 'Martinique',
			'flag' => '🇲🇶',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MR' ),
			'name' => 'Mauritania',
			'flag' => '🇲🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MU' ),
			'name' => 'Mauritius',
			'flag' => '🇲🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'YT' ),
			'name' => 'Mayotte',
			'flag' => '🇾🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MX' ),
			'name' => 'Mexico',
			'flag' => '🇲🇽',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'FM' ),
			'name' => 'Micronesia',
			'flag' => '🇫🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MD' ),
			'name' => 'Moldova',
			'flag' => '🇲🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MC' ),
			'name' => 'Monaco',
			'flag' => '🇲🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MN' ),
			'name' => 'Mongolia',
			'flag' => '🇲🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ME' ),
			'name' => 'Montenegro',
			'flag' => '🇲🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MS' ),
			'name' => 'Montserrat',
			'flag' => '🇲🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MA' ),
			'name' => 'Morocco',
			'flag' => '🇲🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MZ' ),
			'name' => 'Mozambique',
			'flag' => '🇲🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MM' ),
			'name' => 'Myanmar (Burma)',
			'flag' => '🇲🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NA' ),
			'name' => 'Namibia',
			'flag' => '🇳🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NR' ),
			'name' => 'Nauru',
			'flag' => '🇳🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NP' ),
			'name' => 'Nepal',
			'flag' => '🇳🇵',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NL' ),
			'name' => 'Netherlands',
			'flag' => '🇳🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NC' ),
			'name' => 'New Caledonia',
			'flag' => '🇳🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NZ' ),
			'name' => 'New Zealand',
			'flag' => '🇳🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NI' ),
			'name' => 'Nicaragua',
			'flag' => '🇳🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NE' ),
			'name' => 'Niger',
			'flag' => '🇳🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NG' ),
			'name' => 'Nigeria',
			'flag' => '🇳🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NU' ),
			'name' => 'Niue',
			'flag' => '🇳🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NF' ),
			'name' => 'Norfolk Island',
			'flag' => '🇳🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KP' ),
			'name' => 'North Korea',
			'flag' => '🇰🇵',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MK' ),
			'name' => 'North Macedonia',
			'flag' => '🇲🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MP' ),
			'name' => 'Northern Mariana Islands',
			'flag' => '🇲🇵',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'NO' ),
			'name' => 'Norway',
			'flag' => '🇳🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'OM' ),
			'name' => 'Oman',
			'flag' => '🇴🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PK' ),
			'name' => 'Pakistan',
			'flag' => '🇵🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PW' ),
			'name' => 'Palau',
			'flag' => '🇵🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PS' ),
			'name' => 'Palestinian Territories',
			'flag' => '🇵🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PA' ),
			'name' => 'Panama',
			'flag' => '🇵🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PG' ),
			'name' => 'Papua New Guinea',
			'flag' => '🇵🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PY' ),
			'name' => 'Paraguay',
			'flag' => '🇵🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PE' ),
			'name' => 'Peru',
			'flag' => '🇵🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PH' ),
			'name' => 'Philippines',
			'flag' => '🇵🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PN' ),
			'name' => 'Pitcairn Islands',
			'flag' => '🇵🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PL' ),
			'name' => 'Poland',
			'flag' => '🇵🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PT' ),
			'name' => 'Portugal',
			'flag' => '🇵🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PR' ),
			'name' => 'Puerto Rico',
			'flag' => '🇵🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'QA' ),
			'name' => 'Qatar',
			'flag' => '🇶🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'RE' ),
			'name' => 'Réunion',
			'flag' => '🇷🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'RO' ),
			'name' => 'Romania',
			'flag' => '🇷🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'RU' ),
			'name' => 'Russia',
			'flag' => '🇷🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'RW' ),
			'name' => 'Rwanda',
			'flag' => '🇷🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'WS' ),
			'name' => 'Samoa',
			'flag' => '🇼🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SM' ),
			'name' => 'San Marino',
			'flag' => '🇸🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ST' ),
			'name' => 'São Tomé & Príncipe',
			'flag' => '🇸🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SA' ),
			'name' => 'Saudi Arabia',
			'flag' => '🇸🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SN' ),
			'name' => 'Senegal',
			'flag' => '🇸🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'RS' ),
			'name' => 'Serbia',
			'flag' => '🇷🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SC' ),
			'name' => 'Seychelles',
			'flag' => '🇸🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SL' ),
			'name' => 'Sierra Leone',
			'flag' => '🇸🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SG' ),
			'name' => 'Singapore',
			'flag' => '🇸🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SX' ),
			'name' => 'Sint Maarten',
			'flag' => '🇸🇽',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SK' ),
			'name' => 'Slovakia',
			'flag' => '🇸🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SI' ),
			'name' => 'Slovenia',
			'flag' => '🇸🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SB' ),
			'name' => 'Solomon Islands',
			'flag' => '🇸🇧',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SO' ),
			'name' => 'Somalia',
			'flag' => '🇸🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ZA' ),
			'name' => 'South Africa',
			'flag' => '🇿🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GS' ),
			'name' => 'South Georgia & South Sandwich Islands',
			'flag' => '🇬🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KR' ),
			'name' => 'South Korea',
			'flag' => '🇰🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SS' ),
			'name' => 'South Sudan',
			'flag' => '🇸🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ES' ),
			'name' => 'Spain',
			'flag' => '🇪🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LK' ),
			'name' => 'Sri Lanka',
			'flag' => '🇱🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'BL' ),
			'name' => 'St. Barthélemy',
			'flag' => '🇧🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SH' ),
			'name' => 'St. Helena',
			'flag' => '🇸🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'KN' ),
			'name' => 'St. Kitts & Nevis',
			'flag' => '🇰🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'LC' ),
			'name' => 'St. Lucia',
			'flag' => '🇱🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'MF' ),
			'name' => 'St. Martin',
			'flag' => '🇸🇽',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'PM' ),
			'name' => 'St. Pierre & Miquelon',
			'flag' => '🇵🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VC' ),
			'name' => 'St. Vincent & Grenadines',
			'flag' => '🇻🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SD' ),
			'name' => 'Sudan',
			'flag' => '🇸🇩',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SR' ),
			'name' => 'Suriname',
			'flag' => '🇸🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SJ' ),
			'name' => 'Svalbard & Jan Mayen',
			'flag' => '🇳🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SE' ),
			'name' => 'Sweden',
			'flag' => '🇸🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'CH' ),
			'name' => 'Switzerland',
			'flag' => '🇨🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'SY' ),
			'name' => 'Syria',
			'flag' => '🇸🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TW' ),
			'name' => 'Taiwan',
			'flag' => '🇹🇼',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TJ' ),
			'name' => 'Tajikistan',
			'flag' => '🇹🇯',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TZ' ),
			'name' => 'Tanzania',
			'flag' => '🇹🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TH' ),
			'name' => 'Thailand',
			'flag' => '🇹🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TL' ),
			'name' => 'Timor-Leste',
			'flag' => '🇹🇱',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TG' ),
			'name' => 'Togo',
			'flag' => '🇹🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TK' ),
			'name' => 'Tokelau',
			'flag' => '🇹🇰',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TO' ),
			'name' => 'Tonga',
			'flag' => '🇹🇴',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TT' ),
			'name' => 'Trinidad & Tobago',
			'flag' => '🇹🇹',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TN' ),
			'name' => 'Tunisia',
			'flag' => '🇹🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TR' ),
			'name' => 'Turkey',
			'flag' => '🇹🇷',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TM' ),
			'name' => 'Turkmenistan',
			'flag' => '🇹🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TC' ),
			'name' => 'Turks & Caicos Islands',
			'flag' => '🇹🇨',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'TV' ),
			'name' => 'Tuvalu',
			'flag' => '🇹🇻',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'UM' ),
			'name' => 'U.S. Outlying Islands',
			'flag' => '',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VI' ),
			'name' => 'U.S. Virgin Islands',
			'flag' => '🇻🇮',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'UG' ),
			'name' => 'Uganda',
			'flag' => '🇺🇬',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'UA' ),
			'name' => 'Ukraine',
			'flag' => '🇺🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'AE' ),
			'name' => 'United Arab Emirates',
			'flag' => '🇦🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'GB' ),
			'name' => 'United Kingdom',
			'flag' => '🇬🇧',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'US' ),
			'name' => 'United States',
			'flag' => '🇺🇸',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'UY' ),
			'name' => 'Uruguay',
			'flag' => '🇺🇾',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'UZ' ),
			'name' => 'Uzbekistan',
			'flag' => '🇺🇿',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VU' ),
			'name' => 'Vanuatu',
			'flag' => '🇻🇺',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VA' ),
			'name' => 'Vatican City',
			'flag' => '🇻🇦',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VE' ),
			'name' => 'Venezuela',
			'flag' => '🇻🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'VN' ),
			'name' => 'Vietnam',
			'flag' => '🇻🇳',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'WF' ),
			'name' => 'Wallis & Futuna',
			'flag' => '🇼🇫',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'EH' ),
			'name' => 'Western Sahara',
			'flag' => '🇪🇭',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'YE' ),
			'name' => 'Yemen',
			'flag' => '🇾🇪',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ZM' ),
			'name' => 'Zambia',
			'flag' => '🇿🇲',
		),
		array(
			'code' => \RichardTape\ContentVisibilityGeolocation\encode_country_code( 'ZW' ),
			'name' => 'Zimbabwe',
			'flag' => '🇿🇼',
		),
	);

	/**
	* A list of countries.
	*
	* An array of arrays. Each sub-array contains the 'code' and 'name' of each country.
	*
	* @since 0.1.0
	*
	* @param array  $countries The list of countries.
	*/
	return apply_filters( 'content_visibility_geolocation_country_list', $countries );

}//end get_country_list()
