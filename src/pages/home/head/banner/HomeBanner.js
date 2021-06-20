import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import ContentOnBg from '../../../../component/content_on_pic/background/ContentOnBg';
//
import { default_new_l } from '../../__default/HomeHeadDefault';
//
import HomeTitleContent from '../../__component/content/HomeTitleContent';
//
import './HomeBanner.scss';
import './HomeBannerRes.scss';

//
HomeBanner.propTypes = {};

//
function HomeBanner(props) {
    const { id, name, img, title, content, created_time } = default_new_l[0];

    //
    return (
        <Link
            className="HomeBanner wh-100 normal-text hv-cl-gold"
            to={`${name.toLowerCase()}/${id}`}
        >
            <ContentOnBg
                url={img}
                content={
                    <div className="App-width">
                        <HomeTitleContent
                            name={name}
                            title={title}
                            content={content}
                            created_time={created_time}
                        />
                    </div>
                }
            ></ContentOnBg>
        </Link>
    );
}

export default HomeBanner;
