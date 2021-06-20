import React from 'react';
import PropTypes from 'prop-types';
//
import HomeUserPicItem from '../item/HomeUserPicItem';
//
import { default_ins_image_arr } from '../../../../../__default/HomeHeadDefault';

//
HomeUserPic.propTypes = {};

//
function HomeUserPic(props) {
    //
    const pic_arr = default_ins_image_arr;

    //
    return (
        <div>
            <div className="display-flex flex-wrap">
                {pic_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <HomeUserPicItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeUserPic;
