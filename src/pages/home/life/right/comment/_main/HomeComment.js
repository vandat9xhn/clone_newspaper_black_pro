import React from 'react';
import PropTypes from 'prop-types';
//
import { default_comment_l } from '../../../../__default/HomeHeadDefault';
//
import HomeCommentItem from '../item/HomeCommentItem';
//
// import './HomeNLFoot.scss';

//
HomeComment.propTypes = {};

//
function HomeComment() {
    // 
    const comment_arr = default_comment_l;

    //
    return (
        <div className={`HomeComment`}>
            <div>
                <h2 className="home-part-name margin-0">Comment</h2>
            </div>

            <div>
                {comment_arr.map((item, ix) => (
                    <div key={`${ix}`}>
                        <HomeCommentItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeComment;
