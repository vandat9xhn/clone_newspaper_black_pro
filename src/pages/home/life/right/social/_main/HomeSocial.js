import React from 'react';
import PropTypes from 'prop-types';
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
            icon: 'FB',
            follow_count: 22000,
        },
        {
            icon: 'IN',
            follow_count: 46000,
        },
        {
            icon: 'Tw',
            follow_count: 500,
        },
        {
            icon: 'SK',
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
