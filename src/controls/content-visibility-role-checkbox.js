import { CheckboxControl } from '@wordpress/components';

export const CheckboxGroupCheckbox = ( data ) => {
    let { props, role } = { ...data };

    // Which role is this for?
    let roleSlug = role.value;

    // What data has been persisted in the db?
    let persistedData = props.attributes.contentVisibilityRules;

    // If we have persisted data for this role, and it is set to "1" then the checkbox should be checked
    // otherwise we fall back to whatever isChecked is which will change when someone alters the value of the checkbox
    let thisChecked = persistedData.hasOwnProperty( 'userRole' ) && persistedData.userRole.hasOwnProperty( roleSlug ) && '1' === props.attributes.contentVisibilityRules.userRole[ roleSlug ];

    return (
        <CheckboxControl
            label={ role.label }
            checked={ thisChecked }
            onChange={ ( isChecked ) => {
                props.setAttributes( {
                    contentVisibilityRules: {
                        ...props.attributes.contentVisibilityRules,
                        userRole: {
                            ...props.attributes.contentVisibilityRules.userRole,
                            [roleSlug]: isChecked ? '1' : '0'
                        }
                    },
                } );
            }}
        />
    );

};