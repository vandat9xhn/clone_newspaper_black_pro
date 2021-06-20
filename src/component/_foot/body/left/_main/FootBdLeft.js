import React from 'react';
import PropTypes from 'prop-types';
//
import { default_politics_l } from '../../../../../pages/home/__default/HomeHeadDefault';
//
import FootBdLeftItem from '../item/FootBdLeftItem';
//
import './FootBdLeft.scss';

//
FootBdLeft.propTypes = {};

//
function FootBdLeft(props) {
    //
    const foot_body_left_arr = default_politics_l;

    //
    return (
        <div>
            <h2 className="foot-title">Popular articles</h2>

            <div>
                {foot_body_left_arr.map((item, ix) => (
                    <div key={`${ix}`} className="FootBdLeft_item foot-item">
                        <FootBdLeftItem
                            id={item.id}
                            name={item.name}
                            title={item.title}
                            created_time={item.created_time}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FootBdLeft;
