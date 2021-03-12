import React from 'react';

import plane from 'assets/images/plane.png';

import './styles.scss';

function Logo() {
  return (
    <div className="logo">
      <img className="logo__image" src={plane} alt="plane" />
      <span className="logo__text">Fly With Us</span>
    </div>
  );
}

export default Logo;
