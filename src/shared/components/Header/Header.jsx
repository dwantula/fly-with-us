import React from 'react';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import './styles.scss';

function Header() {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Header;
