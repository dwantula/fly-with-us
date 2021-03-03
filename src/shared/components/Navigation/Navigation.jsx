import React from 'react';

import './styles.scss';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__link">My bookings</li>
        <li className="navigation__link">Tracking your flights</li>
        <li className="navigation__link">Contact</li>
      </ul>
    </nav>
  );
}

export default Navigation;
