import React from 'react';
import PropTypes from 'prop-types';
// 
import { data_icon_social_obj } from '../../../../pages/home/__data/icon_social';
// 
import './HeadMenuRight.scss';

//
HeadMenuRight.propTypes = {};

//
function HeadMenuRight(props) {
    const icon_arr = [
        {
            icon: data_icon_social_obj.fb,
        },
        {
            icon: data_icon_social_obj.in,
        },
        {
            icon: data_icon_social_obj.tw,
        },
    ];

    //
    return (
        <div>
            <div className="display-flex">
                {icon_arr.map((item, ix) => (
                    <div key={`${ix}`} className="HeadMenuRight_item">
                        <div><i className={item.icon}></i></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeadMenuRight;
