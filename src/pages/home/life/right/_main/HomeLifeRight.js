import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useStickyChild } from '../../../../../_hook/useStickyChild';
//
import HomeComment from '../comment/_main/HomeComment';
import HomeSocial from '../social/_main/HomeSocial';
//
import slow_down from '../../../../../../image/12/slow_down.jpg';
import './HomeLifeRight.scss';

//
HomeLifeRight.propTypes = {};

//
function HomeLifeRight({ ref_parent }) {
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
                    <div>
                        <HomeSocial />
                    </div>
                </div>

                <div ref={ref_children} className={`home-${position}`}>
                    <div className="home_part-right">
                        <HomeComment />
                    </div>

                    <div>
                        <div>
                            <img
                                className="w-100per"
                                src={slow_down}
                                alt=""
                                height="277"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLifeRight;
