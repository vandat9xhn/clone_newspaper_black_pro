import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import './ContentOnBg.scss';
import { useObserverVidPic } from '../../../_hook/useObserverVidPic';

//
ContentOnBg.propTypes = {
    url: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    class_children: PropTypes.string,
};

ContentOnBg.defaultProps = {
    children: '',
    class_children: '',
};

//
function ContentOnBg({ url, content, children, class_children }) {
    //
    const ref_content_elm = useRef(null);

    //
    const class_vid_pic = useObserverVidPic(ref_content_elm, false);

    //
    return (
        <div
            ref={ref_content_elm}
            className={`ContentOnBg position-rel wh-100 ${class_vid_pic}`}
            // style={{ backgroundImage: `url(${url})` }}
            data-src={url}
        >
            <div className={class_children}>{children}</div>
            <div className="ContentOnBg_content font-bold">{content}</div>
        </div>
    );
}

export default ContentOnBg;
