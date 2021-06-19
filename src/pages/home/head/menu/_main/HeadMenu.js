import React from 'react';
import PropTypes from 'prop-types';
// 
import HeadMenuMid from '../mid/_main/HeadMenuMid';
import HeadMenuLeft from '../left/_main/HeadMenuLeft';
import HeadMenuRight from '../right/_main/HeadMenuRight';
// 
import './HeadMenu.scss';
import './HeadMenuRes.scss';

//
HeadMenu.propTypes = {};

//
function HeadMenu(props) {
    // 
    return (
        <div className="HeadMenu position-rel App-width">
            <div className="HeadMenu_row flex-between-center">
                <div className="HeadMenu_col HeadMenu_left">
                    <HeadMenuLeft />
                </div>

                <div className="HeadMenu_col HeadMenu_mid">
                    <HeadMenuMid />
                </div>

                <div className="HeadMenu_col HeadMenu_right">
                    <HeadMenuRight />
                </div>
            </div>
        </div>
    );
}

export default HeadMenu;
