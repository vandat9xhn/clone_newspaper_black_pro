import React from 'react';
import PropTypes from 'prop-types';
//
import { default_entertainment_l, default_tech_l } from '../../__default/HomeHeadDefault';
//
import HomeOneRowImg from '../../__component/img_list/_main/HomeImgList';
//
import './HomeEntertainment.scss';

//
HomeEntertainment.propTypes = {};

//
function HomeEntertainment(props) {
    //
    const entertainment_arr = default_entertainment_l.slice(0, 3);

    //
    return (
        <div>
            <HomeOneRowImg
                title="Entertainment"
                data_arr={entertainment_arr}
                show_name={true}
            />
        </div>
    );
}

export default HomeEntertainment;
