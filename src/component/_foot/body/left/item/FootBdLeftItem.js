import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './FootBdLeftItem.scss';

//
FootBdLeftItem.propTypes = {};

//
function FootBdLeftItem({ id, name, title, created_time }) {
    //
    return (
        <Link
            to={`/${name}/${id}`}
            className="FootBdLeftItem text-secondary hv-cl-gold"
        >
            <div>
                <div>
                    <h4 className="margin-0">{title}</h4>

                    <div className="foot-time">{created_time}</div>
                </div>
            </div>
        </Link>
    );
}

export default FootBdLeftItem;
