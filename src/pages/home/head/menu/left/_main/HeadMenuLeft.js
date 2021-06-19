import React from 'react';
import PropTypes from 'prop-types';
//
import './HeadMenuLeft.scss';

//
HeadMenuLeft.propTypes = {};

//
function HeadMenuLeft(props) {
    return (
        <div>
            <div className="text-align-center">
                <h2 className="HeadMenuLeft_title margin-0">Black</h2>

                <div className="HeadMenuLeft_foot text-secondary">version PRO</div>
            </div>
        </div>
    );
}

export default HeadMenuLeft;
