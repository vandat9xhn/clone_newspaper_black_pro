import React from 'react';
import PropTypes from 'prop-types';
//
import './HomeTitleContent.scss';

//
HomeTitleContent.propTypes = {};

//
function HomeTitleContent({ name, title, content, created_time }) {
    //
    return (
        <div className="HomeTitleContent">
            <div>
                <h2 className="HomeTitleContent_title">{title}</h2>

                <div className="home-time text-secondary">
                    <span className={`${name ? 'home-name' : 'display-none'}`}>
                        {name}
                    </span>

                    <span>{created_time}</span>
                </div>

                <div
                    className={`${
                        content ? 'HomeTitleContent_content' : 'display-none'
                    }`}
                >
                    <br />

                    <div className="text-secondary">{content}</div>
                </div>
            </div>
        </div>
    );
}

export default HomeTitleContent;
