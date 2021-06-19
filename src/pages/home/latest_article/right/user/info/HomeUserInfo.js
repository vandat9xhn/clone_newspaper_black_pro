import React from 'react';
import PropTypes from 'prop-types';
//
import author from '../../../../../../../image/12/author.jpg';
import './HomeUserInfo.scss';

//
HomeUserInfo.propTypes = {};

//
function HomeUserInfo(props) {
    //
    return (
        <div className="HomeUserInfo">
            <div className="flex-between-center">
                <div>
                    <div className="display-flex align-items-center">
                        <div className="HomeUserInfo_img">
                            <div>
                                <img
                                    className="brs-50"
                                    src={author}
                                    alt=""
                                    width="60"
                                    height="60"
                                />
                            </div>
                        </div>

                        <div>
                            <div>@username</div>

                            <div>3687 follows</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <button className="HomeUserInfo_follow-btn btn text-secondary">
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeUserInfo;
