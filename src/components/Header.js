import React from 'react';

import JeffThomasLogo from '../assets/JeffThomasLogo';

const Header = () => {

  return (
    <div className="header">

      <JeffThomasLogo />

      <div className="links">
        <a href="#portfolio">portfolio</a>
        <a href="#about">about</a>
        <a href="#contact">contact</a>
      </div>

    </div>
  );
};

export default Header