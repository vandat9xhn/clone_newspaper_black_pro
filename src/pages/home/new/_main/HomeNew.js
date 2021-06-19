import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import HomeNewLeft from '../left/HomeNewLeft';
import HomeNewRight from '../right/_main/HomeNewRight';
//
import './HomeNew.scss';

//
HomeNew.propTypes = {};

//
function HomeNew(props) {
    //
    const ref_new = useRef(null);

    //
    return (
        <div ref={ref_new}>
            <div className="home-row">
                <div className="home-left">
                    <HomeNewLeft />
                </div>

                <div className="home-right position-rel">
                    <HomeNewRight ref_parent={ref_new} />
                </div>
            </div>
        </div>
    );
}

export default HomeNew;
