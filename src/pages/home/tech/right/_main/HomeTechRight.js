import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useStickyChild } from '../../../../../_hook/useStickyChild';
//
import HomeTRHead from '../head/HomeTRHead';
import HomeTRFoot from '../foot/HomeTRFoot';
//
import './HomeTechRight.scss';

//
HomeTechRight.propTypes = {};

//
function HomeTechRight({ ref_parent }) {
    //
    const ref_children = useRef(null);

    //
    const { position } = useStickyChild(
        ref_parent,
        ref_children,
        undefined,
        800
    );

    //
    return (
        <div>
            <div>
                <div ref={ref_children} className={`home-${position}`}>
                    <HomeTRFoot />
                </div>
            </div>
        </div>
    );
}

export default HomeTechRight;
