import React from 'react';
import PropTypes from 'prop-types';
//
import { data_icon_social_obj } from '../../../../__data/icon_social';
// 
import HomeSocialItem from '../item/HomeSocialItem';
// 
import './HomeSocial.scss';

//
HomeSocial.propTypes = {};

//
function HomeSocial(props) {
    //
    const social_arr = [
        {
            icon: data_icon_social_obj.fb,
            follow_count: 22000,
        },
        {
            icon: data_icon_social_obj.in,
            follow_count: 46000,
        },
        {
            icon: data_icon_social_obj.tw,
            follow_count: 500,
        },
        {
            icon: data_icon_social_obj.rss,
            follow_count: 50000,
        },
    ];

    //
    return (
        <div>
            {social_arr.map((item, ix) => (
                <div key={`${ix}`} className="HomeSocial_item">
                    <HomeSocialItem
                        icon={item.icon}
                        follow_count={item.follow_count}
                    />
                </div>
            ))}
        </div>
    );
}

export default HomeSocial;
