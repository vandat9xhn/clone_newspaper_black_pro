import React from 'react';
import PropTypes from 'prop-types';
//
import './FootCommon.scss';
// 
import FootBody from '../body/_main/FootBody';
// 
import './Foot.scss';
import './FootRes.scss';

//
Foot.propTypes = {};

//
function Foot(props) {
    //
    return (
        <div className="Foot App-width text-secondary">
            <div>
                <div></div>

                <div>
                    <FootBody />
                </div>

                <div></div>
            </div>
        </div>
    );
}

export default Foot;
