import React from 'react';
import PropTypes from 'prop-types';
//
import './HomeSocialItem.scss';

//
HomeSocialItem.propTypes = {};

//
function HomeSocialItem({ icon, follow_count }) {
    //
    return (
        <div className="HomeSocialItem bg-primary cursor-pointer">
            <div className="flex-between-center">
                <div className="display-flex">
                    <div className="HomeSocialItem_icon">
                        <i className={icon}></i>
                    </div>

                    <div>{follow_count} Follows</div>
                </div>

                <div>Follow</div>
            </div>
        </div>
    );
}

export default HomeSocialItem;
