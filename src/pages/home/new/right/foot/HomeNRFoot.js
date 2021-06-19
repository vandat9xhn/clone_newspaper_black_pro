import React from 'react';
import PropTypes from 'prop-types';
// 
import { default_politics_l } from '../../../head/__default/HomeHeadDefault';
//
import HomeContentImage from '../../../__component/img_content/HomeContentImage';
//
import './HomeNRFoot.scss';

//
HomeNRFoot.propTypes = {};

//
function HomeNRFoot() {
    const new_right_arr = default_politics_l;

    //
    return (
        <div className={`HomeNRFoot`}>
            <div>
                <h2 className="HomeNRFoot_title margin-0">Finance</h2>
            </div>

            <div>
                {new_right_arr.map((item, ix) => (
                    <div key={`${ix}`} className="home_item-right">
                        <div>
                            <HomeContentImage
                                img={item.img}
                                content={item.content}
                                created_time={item.created_time}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeNRFoot;
