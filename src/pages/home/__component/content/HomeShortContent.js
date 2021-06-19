import React from 'react';
import PropTypes from 'prop-types';
//
import './HomeShortContent.scss';

//
HomeShortContent.propTypes = {};

//
function HomeShortContent({ content, created_time }) {
    //
    return (
        <div>
            <h3 className="HomeShortContent_content margin-0">{content}</h3>

            <div className="home-time text-secondary">
                {created_time}
            </div>
        </div>
    );
}

export default HomeShortContent;
