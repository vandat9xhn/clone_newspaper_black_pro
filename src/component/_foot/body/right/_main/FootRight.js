import React from 'react';
import PropTypes from 'prop-types';
// 
import './FootRight.scss';

// 
FootRight.propTypes = {};

// 
function FootRight(props) {
    // 
    return (
        <div>
            <h2 className="foot-title">Newsletter</h2>

            <div className="foot-item">
                <div>
                    Subscribe to get the latest news, offers and special
                    announcements.
                </div>
            </div>

            <div>
                <div>
                    <input
                        className="FootRight_input-item w-100per input-none padding-8px brs-5px"
                        type="text"
                        placeholder="Your email address"
                        spellCheck="false"
                    />
                </div>

                <div className="FootRight_submit">
                    <button className="FootRight_submit-btn w-100per btn btn-hv padding-8px brs-5px">
                        Subscribe
                    </button>
                </div>

                <div className="font-12px">
                    By subscribing, you're accepting to receive promotions.
                </div>
            </div>
        </div>
    );
}

export default FootRight;
