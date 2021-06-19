import React from 'react';
import PropTypes from 'prop-types';
//
import HomeUser from '../user/_main/HomeUser';
//
import good_day from '../../../../../../image/12/good_day.jpg';

//
HomeArticleRight.propTypes = {};

//
function HomeArticleRight(props) {
    //
    return (
        <div>
            <div>
                <div className="home_item-right">
                    <div>
                        <img
                            className="w-100per"
                            src={good_day}
                            alt=""
                            height="247"
                        />
                    </div>
                </div>

                <div className="home_item-right">
                    <HomeUser />
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default HomeArticleRight;
