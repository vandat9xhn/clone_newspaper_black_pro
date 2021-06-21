import React from 'react';
import PropTypes from 'prop-types';
//
import VidPicObserve from '../../../../component/vid_pic_observe/VidPicObserve';
//
import Flex from '../../../../component/flex/Flex';
//
import HomeTitleContent from '../content/HomeTitleContent';
//
import './HomeImageContent.scss';

//
HomeImageContent.propTypes = {};

//
function HomeImageContent({ img, name, title, content, created_time }) {
    //
    return (
        <div className="">
            <Flex
                ComponentLeft={
                    <div>
                        <VidPicObserve img={img} />
                    </div>
                }
                ComponentRight={
                    <HomeTitleContent
                        name={name}
                        title={title}
                        content={content}
                        created_time={created_time}
                    />
                }
                flex_class=""
                left_class="HomeImageContent_left"
                right_class="flex-grow-1"
            />
        </div>
    );
}

export default HomeImageContent;
