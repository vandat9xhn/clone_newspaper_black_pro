import React from 'react';
import PropTypes from 'prop-types';
//
import { default_tech_l } from '../../head/__default/HomeHeadDefault';
//
import HomeOneRowImg from '../../__component/img_list/_main/HomeImgList';
//
import './HomePolitics.scss';

//
HomePolitics.propTypes = {};

//
function HomePolitics(props) {
    //
    const politics_arr = default_tech_l.slice(0, 3);

    //
    return (
        <div>
            <HomeOneRowImg title="Politics" data_arr={politics_arr} />
        </div>
    );
}

export default HomePolitics;