import React from 'react';
import PropTypes from 'prop-types';

//
HomeUserPicItem.propTypes = {};

//
function HomeUserPicItem({ item }) {
    //
    return (
        <div>
            <img src={item} alt="" width="115" height="115" />
        </div>
    );
}

export default HomeUserPicItem;
