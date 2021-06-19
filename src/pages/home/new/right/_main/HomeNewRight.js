import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useStickyChild } from '../../../../../_hook/useStickyChild';
//
import HomeNRHead from '../head/HomeNRHead';
import HomeNRFoot from '../foot/HomeNRFoot';
import HomeNRSearch from '../search/HomeNRSearch';
//
import './HomeNewRight.scss';

//
HomeNewRight.propTypes = {};

//
function HomeNewRight({ ref_parent }) {
    //
    const ref_children = useRef(null);
    const ref_sibling = useRef(null);

    //
    const { position } = useStickyChild(
        ref_parent,
        ref_children,
        ref_sibling,
        800
    );

    //
    return (
        <div>
            <div>
                <div className="home_part-right" ref={ref_sibling}>
                    <div className="home_part-right">
                        <HomeNRSearch />
                    </div>

                    <div>
                        <HomeNRHead />
                    </div>
                </div>

                <div ref={ref_children} className={`home-${position}`}>
                    <HomeNRFoot />
                </div>
            </div>
        </div>
    );
}

export default HomeNewRight;
