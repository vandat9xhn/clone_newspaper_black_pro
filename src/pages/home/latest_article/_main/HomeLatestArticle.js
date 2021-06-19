import React from 'react';
import PropTypes from 'prop-types';
import HomeArticle from '../article/HomeArticle';
import HomeArticleRight from '../right/_main/HomeArticleRight';

//
HomeLatestArticle.propTypes = {};

//
function HomeLatestArticle(props) {
    //
    return (
        <div>
            <div className="home-row">
                <div className="home-left">
                    <HomeArticle />
                </div>

                <div className="home-right">
                    <HomeArticleRight />
                </div>
            </div>
        </div>
    );
}

export default HomeLatestArticle;
