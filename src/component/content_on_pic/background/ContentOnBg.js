import React from 'react';
import PropTypes from 'prop-types';
//
import './ContentOnBg.scss';

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
    return (
        <div
            className="ContentOnBg position-rel wh-100"
            style={{ backgroundImage: `url(${url})` }}
        >
            <div className={class_children}>{children}</div>
            <div className="ContentOnBg_content font-bold">{content}</div>
        </div>
    );
}

export default ContentOnBg;
