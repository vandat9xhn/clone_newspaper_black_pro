import React from 'react';
import PropTypes from 'prop-types';
// 
import './HeadMenuRight.scss';

//
HeadMenuRight.propTypes = {};

//
function HeadMenuRight(props) {
    const icon_arr = [
        {
            icon: 'FB',
        },
        {
            icon: 'IN',
        },
        {
            icon: 'TW',
        },
    ];

    //
    return (
        <div>
            <div className="display-flex">
                {icon_arr.map((item, ix) => (
                    <div key={`${ix}`} className="HeadMenuRight_item">
                        <div>{item.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeadMenuRight;
