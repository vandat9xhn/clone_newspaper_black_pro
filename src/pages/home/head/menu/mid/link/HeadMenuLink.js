import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './HeadMenuLink.scss';

//
HeadMenuLink.propTypes = {};

//
function HeadMenuLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className="HeadMenuLink normal-text font-bold"
            activeClassName="text-goldenrod"
        >
            <div>{children}</div>
        </NavLink>
    );
}

export default HeadMenuLink;
