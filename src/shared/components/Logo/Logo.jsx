import React from 'react';

import './styles.scss';

function Logo() {
  return (
    <div className="logo">
      <img className="logo__image" src="images/plane.png" alt="plane" />
      <span className="logo__text">Fly With Us</span>
    </div>
  );
}

export default Logo;
