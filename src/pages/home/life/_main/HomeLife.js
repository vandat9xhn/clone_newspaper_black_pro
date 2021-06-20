import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import HomeLifeLeft from '../left/HomeLifeLeft';
import HomeLifeRight from '../right/_main/HomeLifeRight';
//
import './HomeLife.scss';

//
HomeLife.propTypes = {};

//
function HomeLife(props) {
    //
    const ref_life = useRef(null);

    //
    return (
        <div ref={ref_life}>
            <div>
                <div className="home-row">
                    <div className="home-left">
                        <HomeLifeLeft />
                    </div>

                    <div className="home-right position-rel">
                        <HomeLifeRight ref_parent={ref_life} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLife;
