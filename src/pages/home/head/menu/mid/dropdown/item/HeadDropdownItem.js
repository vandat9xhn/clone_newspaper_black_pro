import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// 
import './HeadDropdownItem.scss';

//
HeadDropdownItem.propTypes = {};

//
function HeadDropdownItem({ dropdown_item, link_item, title_link }) {
    //
    return (
        <Link
            className="normal-text hv-cl-gold font-bold"
            to={`${link_item}/${dropdown_item.id}`}
        >

            <div className="padding-8px">
                <div>
                    <div>
                        <img
                            className="w-100per"
                            src={dropdown_item.img}
                            alt=""
                        />
                    </div>

                    <div className="HeadDropdownItem_title">
                        {dropdown_item.title}
                    </div>

                    <div className="HeadDropdownItem_foot text-secondary">
                        <span className="home-name">{title_link}</span>

                        <span>{dropdown_item.created_time}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default HeadDropdownItem;
