import { PanelBody, PanelRow } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import { ContentVisibilityGeolocationMultiSelect } from '../controls/content-visibility-geolocation-multisitelect';

/**
 * PHP sends through a list of all the users on the site. We massage that data to be
 * usable by our Dropdown.
 *
 */
function getCountries() {

    const countries = [];

    if ( BlockVisibilityGeolocation.countries.length === 0 ) {
        return [ {
            label: __( 'No countries found.', 'content-visibility' ),
            value: 0,
            notes: '',
        } ]
    }

    for ( const country in BlockVisibilityGeolocation.countries ) {
    
        countries.push( { 
            icon: BlockVisibilityGeolocation.countries[country].flag,
            label: BlockVisibilityGeolocation.countries[country].name,
            value: BlockVisibilityGeolocation.countries[country].code,
        } );
    
    }

    return countries;

}// end getCountries()

function ContentVisibilityGeolocationBodyControl( { instanceId, props } ) {

    const data = getCountries();
    const type = 'geolocation';

    return (
        <PanelBody
            title={ __( 'Geolocation', 'content-visibility-geolocation' ) }
            initialOpen={ false }
            className="content-visibility-control-panel content-visibility-geolocation-controls"
        >
            <PanelRow>
                <ContentVisibilityGeolocationMultiSelect data={ data } labelledBy="Select Specific Users" props={ props } type={ type } />
            </PanelRow>

            { props.attributes.contentVisibility && (
                <p className="geolocation-help-intro content-visibility-help-text">{ __( 'Select one or more countries to whom this block will be ' + props.attributes.contentVisibility + '. If no countries are selected, this block will be ' + props.attributes.contentVisibility + ' regardless of a user\'s location.', 'content-visibility-geolocation' ) }</p>
            ) }
        </PanelBody>
    );

}

export default withInstanceId( ContentVisibilityGeolocationBodyControl );