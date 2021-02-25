import { Fill, Disabled } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { addFilter } from '@wordpress/hooks';

import ContentVisibilityGeolocationPanelBodyControl from './content-visibility-geolocation-panel-body';

export function ContentVisibilityGeolocationControl( data ) {

    let { props } = { ...data };

    let rulesEnabled    = props.attributes.contentVisibilityRules.contentVisibilityRulesEnabled;
    let contentVisibility = props.attributes.hasOwnProperty( 'contentVisibility' );

    if ( ! rulesEnabled || ! contentVisibility ) {
        return (
            <Disabled><ContentVisibilityGeolocationPanelBodyControl props={ props } /></Disabled>
        );
    }

    return (
        <ContentVisibilityGeolocationPanelBodyControl props={ props } />
    );

}

/**
 * Render the <ContentVisibilityGeolocationControl> component by adding
 * it to the block-visibility-extra-controls Fill.
 *
 * @return {Object} A Fill component wrapping the ContentVisibilityGeolocationControl component.
 */
function ContentVisibilityGeolocationFill() {
    return (
        <Fill name="content-visibility-extra-controls">
            {
                ( fillProps ) => {
                    return (
                        <ContentVisibilityGeolocationControl props={ fillProps } />
                    )
                }
            }
        </Fill>
    );

}

// Add our component to the Slot provided by BlockVisibilityControls
registerPlugin( 'content-visibility-05-geolocation-fill', { render: ContentVisibilityGeolocationFill } );


// Register our visibility rule with the main plugin
addFilter( 'contentVisibility.defaultContentVisibilityRules', 'content-visibility-geolocation/block-visibility-rules', registerContentVisibilityRule );

function registerContentVisibilityRule( defaultRules ) {

    defaultRules.geolocation = {};

    return defaultRules;

}
