import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import HomeImgList from '../../__component/img_list/_main/HomeImgList';
//
import { default_latest_article_l } from '../../__default/HomeHeadDefault';
//
import './HomeArticle.scss';
import './HomeArticleRes.scss';

//
HomeArticle.propTypes = {};

//
function HomeArticle(props) {
    //
    const [article_state, setArticleState] = useState({
        article_arr: default_latest_article_l,
        is_fetching: false,
        is_max: false,
    });

    const { article_arr, is_fetching, is_max } = article_state;

    //
    function handleGetMore() {
        setArticleState((article_state) => ({
            ...article_state,
            is_fetching: true,
        }));

        setTimeout(() => {
            setArticleState((article_state) => ({
                article_arr: [
                    ...article_state.article_arr,
                    ...article_state.article_arr.slice(0, 5),
                ],
                is_fetching: false,
                is_max: true,
            }));
        }, 500);
    }

    //
    return (
        <div className="HomeArticle">
            <div>
                <HomeImgList
                    title="Latest article"
                    data_arr={article_arr}
                    show_name={true}
                />
            </div>

            <div className={`HomeArticle_more ${is_max ? 'display-none' : ''}`}>
                <div className="display-flex-center">
                    <button
                        className={`HomeArticle_more-btn font-bold cursor-pointer hv-cl-gold ${
                            is_fetching ? 'display-none' : ''
                        }`}
                        disabled={is_fetching}
                        onClick={handleGetMore}
                    >
                        <span>Load more </span>

                        <span>
                            <i className="fas fa-angle-down"></i>
                        </span>
                    </button>

                    <div className={`${is_fetching ? '' : 'display-none'}`}>
                        Loading...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeArticle;
