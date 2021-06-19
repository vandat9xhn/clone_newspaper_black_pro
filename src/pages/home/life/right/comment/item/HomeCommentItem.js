import React from 'react';
import PropTypes from 'prop-types';
// 
import './HomeCommentItem.scss';

//
HomeCommentItem.propTypes = {};

//
function HomeCommentItem({ item }) {
    //
    const { content } = item;

    //
    return (
        <div className="HomeCommentItem">
            <div>{content}</div>
        </div>
    );
}

export default HomeCommentItem;
