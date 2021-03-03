import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';

import './styles.scss';

function Main() {
  return (
    <main className="main">
      <img className="main__image" src="images/main.jpg" alt="view" />
      <h1 className="main__title">Let the journey begin</h1>
      <div className="main__search">
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
      <div className="main__search-column">
        <Button className="main__button" text="Let's go" />
      </div>
    </main>
  );
}

export default Main;
