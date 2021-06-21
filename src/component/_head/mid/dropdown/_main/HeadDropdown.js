import React from 'react';
import PropTypes from 'prop-types';
//
import './HeadDropdown.scss';
//
import HeadDropdownItem from '../item/HeadDropdownItem';

//
HeadDropdown.propTypes = {};

//
function HeadDropdown({
    dropdown_arr,
    link_item,
    title_link,
    is_fetching,
    has_fetched,
    active_ix,

    handleNext,
    handlePrev,
}) {
    //
    return (
        <div className="HeadDropdown position-rel padding-8px box-shadow-1 bg-loader">
            <div className={`${has_fetched ? '' : 'display-none'}}`}>
                <ul
                    className={`HeadDropdown_row display-flex list-none ${
                        is_fetching ? 'pointer-events-none opacity-05' : ''
                    }`}
                    style={{ transform: `translateX(${-active_ix * 100}%)` }}
                >
                    {dropdown_arr.map((item, ix) => (
                        <li className="HeadDropdown_item" key={`${ix}`}>
                            <HeadDropdownItem
                                dropdown_item={item}
                                title_link={title_link}
                                link_item={link_item}
                            />
                        </li>
                    ))}
                </ul>

                <div
                    className={`${
                        dropdown_arr.length > 0 ? '' : 'display-none'
                    }`}
                >
                    <div className="display-flex">
                        <div
                            className={`padding-8px ${
                                active_ix == 0
                                    ? 'pointer-events-none opacity-05'
                                    : 'cursor-pointer'
                            }`}
                            onClick={handlePrev}
                        >
                            <i className="fas fa-angle-left"></i>
                        </div>

                        <div
                            className={`padding-8px ${
                                active_ix == 1
                                    ? 'pointer-events-none opacity-05'
                                    : 'cursor-pointer'
                            }`}
                            onClick={handleNext}
                        >
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`pos-abs-center ${
                    is_fetching ? '' : 'display-none'
                }`}
            >
                <div className="font-bold">Fetching...</div>
            </div>
        </div>
    );
}

export default HeadDropdown;
