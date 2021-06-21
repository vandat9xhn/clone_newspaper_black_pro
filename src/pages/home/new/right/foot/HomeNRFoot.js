import React from 'react';
import PropTypes from 'prop-types';
// 
import { default_finance_l } from '../../../__default/HomeHeadDefault';
//
import HomeContentImage from '../../../__component/img_content/HomeContentImage';
//
import './HomeNRFoot.scss';

//
HomeNRFoot.propTypes = {};

//
function HomeNRFoot() {
    const new_right_arr = default_finance_l;

    //
    return (
        <div className={`HomeNRFoot`}>
            <div>
                <h1 className="home-title">Finance</h1>
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

export default HomeNRFoot;
