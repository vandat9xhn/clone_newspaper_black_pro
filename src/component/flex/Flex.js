import React from 'react';
import PropTypes from 'prop-types';

//
Flex.propTypes = {
    flex_class: PropTypes.string,
    left_class: PropTypes.string,
    right_class: PropTypes.string,
    ComponentLeft: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    ComponentRight: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Flex.defaultProps = {
    flex_class: '',
    left_class: '',
    right_class: '',
};

//
function Flex({
    flex_class,
    left_class,
    right_class,
    ComponentLeft,
    ComponentRight,
}) {
    //
    return (
        <div className="Flex">
            <div className={`Flex_row display-flex ${flex_class}`}>
                <div className={`Flex_left ${left_class}`}>{ComponentLeft}</div>

                <div className={`Flex_right ${right_class}`}>
                    {ComponentRight}
                </div>
            </div>
        </div>
    );
}

export default Flex;
