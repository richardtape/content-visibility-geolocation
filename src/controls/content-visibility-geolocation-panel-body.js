import { PanelBody, PanelRow } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

function ContentVisibilityGeolocationBodyControl( { instanceId, props } ) {

    return (
        <PanelBody
            title={ __( 'Geolocation', 'content-visibility-geolocation' ) }
            initialOpen={ false }
            className="content-visibility-control-panel content-visibility-geolocation-controls"
        >
            <PanelRow>
                SOMETHING HERE YES?!
            </PanelRow>

            { props.attributes.contentVisibility && (
                <p className="geolocation-help-intro content-visibility-help-text">{ __( 'Select one or more countries to whom this block will be ' + props.attributes.contentVisibility + '. If no countries are selected, this block will be ' + props.attributes.contentVisibility + ' regardless of a user\'s location.', 'content-visibility-geolocation' ) }</p>
            ) }
        </PanelBody>
    );

}

export default withInstanceId( ContentVisibilityGeolocationBodyControl );