import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// 
import { useObserverVidPic } from '../../_hook/useObserverVidPic';
//

//
VidPicObserve.propTypes = {
    img: PropTypes.string,
    class_img: PropTypes.string,
};

VidPicObserve.defaultProps = {
    class_img: ''
}

//
function VidPicObserve({ img, class_img}) {
    //
    const ref_img = useRef(null);

    //
    const class_vid_pic = useObserverVidPic(ref_img);

    //
    return (
        <img
            ref={ref_img}
            className={`${class_img} ${class_vid_pic}`}
            data-src={img}
            // src={img}
            alt=""
        />
    );
}

export default VidPicObserve;
