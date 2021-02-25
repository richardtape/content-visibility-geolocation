import MultiSelect from "react-multi-select-component";
import { withState } from '@wordpress/compose';

export const ContentVisibilityGeolocationMultiSelect = withState( {
    option: [],
} )( ( { option, setState, props, data, labelledBy, type } ) => {

    /**
     * onChange callback for the ContentVisibilityMultiSelect component. This handles setting the props and state for
     * this instance of the component.
     * 
     * @param {array} option current value of what is selected.
     */
    const onChange = ( option ) => {

        // Set the state and props.
        setState( { option } );

        props.setAttributes( {
            contentVisibilityRules: {
                ...props.attributes.contentVisibilityRules,
                geolocation: {
                    ...props.attributes.contentVisibilityRules.geolocation,
                    [type]: option
                }
            },
        } );

    };

    return (
        <div className="content-visibility-multi-select">
            <MultiSelect
                options={ data }
                value={ props.attributes.contentVisibilityRules.geolocation[type] || option }
                onChange={ onChange }
                labelledBy={ labelledBy }
                ItemRenderer={ ( { checked, option, onClick, disabled, } ) => {
                    return (
                        <div className={`item-renderer content-visibility-multi-select-item ${disabled && "disabled"}`}>
                            <input type="checkbox" onChange={ onClick } checked={ checked } tabIndex={ -1 } disabled={ disabled } />
                            <span>{option.icon || ""} &nbsp; {option.label}</span>
                        </div>
                    );
                } }
                // isOpen={ true }
            />
        </div>
    );

} );