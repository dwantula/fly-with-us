import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__link">
          <NavLink className="navigation__link-text" to="/Home">
            Home
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink className="navigation__link-text" to="/MyBooking">
            MyBooking
          </NavLink>
        </li>
        <li className="navigation__link">
          <NavLink className="navigation__link-text" to="/TrackingFlights">
            Tracking your flights
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
