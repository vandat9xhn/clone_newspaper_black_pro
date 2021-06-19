import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import HomeTechLeft from '../left/HomeTechLeft';
import HomeTechRight from '../right/_main/HomeTechRight';
//
import './HomeTech.scss';

//
HomeTech.propTypes = {};

//
function HomeTech(props) {
    //
    const ref_tech = useRef(null);

    //
    return (
        <div ref={ref_tech}>
            <div className="home-row">
                <div className="home-left">
                    <HomeTechLeft />
                </div>

                <div className="home-right position-rel">
                    <HomeTechRight ref_parent={ref_tech} />
                </div>
            </div>
        </div>
    );
}

export default HomeTech;
