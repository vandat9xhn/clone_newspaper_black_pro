import React from 'react';
import PropTypes from 'prop-types';
// 
import HomeImgList from '../../__component/img_list/_main/HomeImgList';
// 
import { default_tech_l } from '../../head/__default/HomeHeadDefault';
// 
import './HomeArticle.scss';
import './HomeArticleRes.scss';

// 
HomeArticle.propTypes = {};

// 
function HomeArticle(props) {
    //
    const article_arr = default_tech_l;

    //
    return (
        <div className="HomeArticle">
            <HomeImgList title="Latest article" data_arr={article_arr} />
        </div>
    );
}

export default HomeArticle;
