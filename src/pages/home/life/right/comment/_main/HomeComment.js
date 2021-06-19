import React from 'react';
import PropTypes from 'prop-types';
//
import { default_politics_l } from '../../../../head/__default/HomeHeadDefault';
//
import HomeContentImage from '../../../../__component/img_content/HomeContentImage';
import HomeCommentItem from '../item/HomeCommentItem';
//
// import './HomeNLFoot.scss';

//
HomeComment.propTypes = {};

//
function HomeComment() {
    const comment_arr = [
        {
            content:
                'Sarah Sereno on Tesla’s Cybertruck fiasco cost Elon Musk $768 million in a single day',
        },
        {
            content:
                'Sarah Sereno on What’s the point of ‘Charlie’s Angels’ without Sam Rockwell dancing?',
        },
        {
            content:
                'Sarah Sereno on ‘Heathers’ is still the best dark comedy about high school hell',
        },
        {
            content:
                'Sarah Sereno on 8 things millennials wish you would just stop getting them for the holidays',
        },
    ];

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
