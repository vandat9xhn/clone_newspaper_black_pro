import React from 'react';
import PropTypes from 'prop-types';
//
import Flex from '../../../../component/flex/Flex';
//
import HomeShortContent from '../content/HomeShortContent';

//
HomeContentImage.propTypes = {};

//
function HomeContentImage({ img, content, created_time }) {
    //
    return (
        <div className="HomeContentImage">
            <Flex
                ComponentLeft={
                    <HomeShortContent
                        content={content}
                        created_time={created_time}
                    />
                }
                ComponentRight={
                    <div>
                        <img src={img} alt="" />
                    </div>
                }
                flex_class=""
                left_class="flex-grow-1"
                right_class=""
            />
        </div>
    );
}

export default HomeContentImage;
