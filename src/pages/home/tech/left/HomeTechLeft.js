import React from 'react';
import PropTypes from 'prop-types';
//
import { default_tech_l } from '../../head/__default/HomeHeadDefault';
// 
import HomeImageContent from '../../__component/img_content/HomeImageContent';
//

//
HomeTechLeft.propTypes = {};

//
function HomeTechLeft(props) {
    const new_left_arr = default_tech_l;

    //
    return (
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
    );
}

export default HomeTechLeft;
