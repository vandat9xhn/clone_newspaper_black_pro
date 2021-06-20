import React from 'react';
import PropTypes from 'prop-types';
//
import HomeBanner from '../banner/HomeBanner';
//
import './HomeHead.scss';

//
HomeHead.propTypes = {};

//
function HomeHead(props) {
    //
    return (
        <div className="HomeHead position-rel">
            <div className="pos-abs-100">
                <HomeBanner />
            </div>
        </div>
    );
}

export default HomeHead;
