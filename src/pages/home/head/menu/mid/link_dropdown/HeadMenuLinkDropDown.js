import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import HeadMenuLink from '../link/HeadMenuLink';
import HeadDropdown from '../dropdown/_main/HeadDropdown';
//
import './HeadMenuLinkDropDown.scss';

//
HeadMenuLinkDropDown.propTypes = {};

//
function HeadMenuLinkDropDown({ to, link_item, title_link, API_Dropdown_L }) {
    //
    const [menu_link_state, setMenuLinkState] = useState({
        dropdown_arr: [],
        open_dropdown: false,
        has_fetched: false,
        is_fetching: false,
        active_ix: 0,
    });

    const { dropdown_arr, open_dropdown, has_fetched, is_fetching, active_ix } =
        menu_link_state;

    /* ----------- GET API ------------ */

    //
    async function getData_API_Dropdown({ start_obj_state = {} }) {
        setMenuLinkState((menu_link_state) => ({
            ...menu_link_state,
            open_dropdown: true,
            is_fetching: true,
            ...start_obj_state,
        }));

        const res = await API_Dropdown_L({
            page: 1,
            size: 4,
        });

        const { data } = res.data;

        setMenuLinkState((menu_link_state) => ({
            ...menu_link_state,
            dropdown_arr: menu_link_state.has_fetched
                ? [...dropdown_arr, ...data]
                : data,
            has_fetched: true,
            is_fetching: false,
        }));
    }

    /* ----------------------- */

    //
    function handleMouseEnter() {
        if (has_fetched) {
            setMenuLinkState({
                ...menu_link_state,
                open_dropdown: true,
            });
        } else {
            getData_API_Dropdown({});
        }
    }

    //
    function handleMouseLeave() {
        setMenuLinkState({
            ...menu_link_state,
            open_dropdown: false,
        });
    }

    //
    function handleNext() {
        if (active_ix == 1) {
            return;
        }

        if (dropdown_arr.length > 4) {
            setMenuLinkState({
                ...menu_link_state,
                active_ix: active_ix + 1,
            });

            return;
        }

        getData_API_Dropdown({ start_obj_state: { active_ix: active_ix + 1 } });
    }

    //
    function handlePrev() {
        if (active_ix == 0) {
            return;
        }

        setMenuLinkState({
            ...menu_link_state,
            active_ix: active_ix - 1,
        });
    }

    //
    return (
        <div
            className="HeadMenuLinkDropDown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                <HeadMenuLink to={to}>
                    <div className={`${open_dropdown ? 'text-goldenrod' : ''}`}>
                        <span>{title_link}</span>

                        <span className="HeadMenuLinkDropDown_icon">
                            {/* <i className="tdb-sub-menu-icon td-icon-pluss"></i> */}
                            {`  `}♦
                        </span>
                    </div>
                </HeadMenuLink>
            </div>

            <div
                className={`HeadMenuLinkDropDown_list ${
                    open_dropdown ? '' : 'display-none'
                }`}
            >
                <HeadDropdown
                    dropdown_arr={dropdown_arr}
                    link_item={link_item}
                    title_link={title_link}
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                    active_ix={active_ix}
                    //
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
        </div>
    );
}

export default HeadMenuLinkDropDown;
