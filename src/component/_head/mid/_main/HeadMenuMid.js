import React from 'react';
import PropTypes from 'prop-types';
//
import { HOME_PATH } from '../../../../__routes/paths';
//
import { menu_arr, menu_dropdown_arr } from '../../../../pages/home/head/__data/HomeHeadData';
//
import './HeadMenuMid.scss';
// 
import HeadMenuLink from '../link/HeadMenuLink';
import HeadMenuLinkDropDown from '../link_dropdown/HeadMenuLinkDropDown';

//
HeadMenuMid.propTypes = {};

//
function HeadMenuMid(props) {
    //
    return (
        <div className="HeadMenuMid">
            <ul className="HeadMenuMid_row display-flex list-none">
                <li className="HeadMenuMid_item">
                    <HeadMenuLink to={HOME_PATH}>Home</HeadMenuLink>
                </li>

                {menu_dropdown_arr.map((item, ix) => (
                    <li key={`${ix}`} className="HeadMenuMid_item">
                        <HeadMenuLinkDropDown
                            to={item.to}
                            link_item={item.link_item}
                            title_link={item.title_link}
                            API_Dropdown_L={item.API_Dropdown_L}
                        />
                    </li>
                ))}

                {menu_arr.map((item, ix) => (
                    <li key={`${ix}`} className="HeadMenuMid_item">
                        <HeadMenuLink to={item.to}>
                            {item.title_link}
                        </HeadMenuLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeadMenuMid;
