import React from 'react';
import PropTypes from 'prop-types';
// 
import HomeUserPicItem from '../item/HomeUserPicItem';
// 
import insta_4 from  '../../../../../../../../image/12/insta_4.jpg';

// 
HomeUserPic.propTypes = {
    
};

// 
function HomeUserPic(props) {
    // 
    const pic_arr = new Array(9).fill(insta_4)

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