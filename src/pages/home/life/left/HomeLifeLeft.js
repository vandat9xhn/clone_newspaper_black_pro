import React from 'react';
import PropTypes from 'prop-types';
//
import { default_life_l } from '../../__default/HomeHeadDefault';
//
import HomeImageContent from '../../__component/img_content/HomeImageContent';
//

//
HomeLifeLeft.propTypes = {};

//
function HomeLifeLeft(props) {
    const new_left_arr = default_life_l;

    //
    return (
        <div>
            <h2 className="home-title">Life</h2>

            <div>
                {new_left_arr.map((item, ix) => (
                    <div key={`${ix}`} className="home_item-left">
                        <HomeImageContent
                            img={item.img}
                            name={item.name}
                            title={item.title}
                            content={item.content}
                            created_time={item.created_time}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeLifeLeft;
