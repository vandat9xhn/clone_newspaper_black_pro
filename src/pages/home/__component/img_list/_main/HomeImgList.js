import React from 'react';
import PropTypes from 'prop-types';
//
import ContentOnBg from '../../../../../component/content_on_pic/background/ContentOnBg';
//
import HomeTitleContent from '../../content/HomeTitleContent';
//
import './HomeImgList.scss';
import './HomeImgListRes.scss';

//
HomeImgList.propTypes = {};

//
function HomeImgList({ title, data_arr }) {
    //
    return (
        <div className="HomeImgList">
            <h2 className="home-title">{title}</h2>

            <div className="display-flex space-between flex-wrap">
                {data_arr.map((item, ix) => (
                    <div className="HomeImgList_col position-rel" key={`${ix}`}>
                        <div className="pos-abs-100">
                            <div className="wh-100">
                                <ContentOnBg
                                    url={item.img}
                                    content={
                                        <HomeTitleContent
                                            name={item.name}
                                            title={item.title}
                                            created_time={item.created_time}
                                        />
                                    }
                                ></ContentOnBg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeImgList;
