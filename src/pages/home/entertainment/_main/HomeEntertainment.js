import React from 'react';
import PropTypes from 'prop-types';
//
import { default_tech_l } from '../../head/__default/HomeHeadDefault';
//
import HomeOneRowImg from '../../__component/img_list/_main/HomeImgList';
//
import './HomeEntertainment.scss';

//
HomeEntertainment.propTypes = {};

//
function HomeEntertainment(props) {
    //
    const entertainment_arr = default_tech_l.slice(0, 3);

    //
    return (
        <div>
            <HomeOneRowImg title="Entertainment" data_arr={entertainment_arr} />
        </div>
    );
}

export default HomeEntertainment;
