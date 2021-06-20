import React from 'react';
import PropTypes from 'prop-types';
//
import { default_music_l } from '../../../__default/HomeHeadDefault';
//
import HomeContentImage from '../../../__component/img_content/HomeContentImage';
//
import './HomeTRFoot.scss';

//
HomeTRFoot.propTypes = {};

//
function HomeTRFoot() {
    const new_right_arr = default_music_l;

    //
    return (
        <div className={`HomeTRFoot`}>
            <div>
                <h2 className="HomeTRFoot_title">Music</h2>
            </div>

            <div>
                {new_right_arr.map((item, ix) => (
                    <div key={`${ix}`} className="home_item-right">
                        <div>
                            <HomeContentImage
                                img={item.img}
                                content={item.title}
                                created_time={item.created_time}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeTRFoot;
