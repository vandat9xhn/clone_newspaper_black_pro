import React from 'react';
import PropTypes from 'prop-types';
//
import FootBdLeft from '../left/_main/FootBdLeft';
import FootBdRight from '../mid/_main/FootBdMid';
// 
import './FootBody.scss';
import FootRight from '../right/_main/FootRight';

//
FootBody.propTypes = {};

//
function FootBody(props) {
    
    //
    return (
        <div className="FootBody">
            <div className="FootBody_row display-flex space-between flex-wrap">
                <div className="FootBody_col">
                    <FootBdLeft />
                </div>

                <div className="FootBody_col">
                    <FootBdRight />
                </div>

                <div className="FootBody_col">
                    <FootRight />
                </div>
            </div>
        </div>
    );
}

export default FootBody;
