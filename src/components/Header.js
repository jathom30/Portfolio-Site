import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import JeffThomasLogo from '../assets/JeffThomasLogo';

const Header = () => {

  return (
    <div className="header">

      <JeffThomasLogo />

      <div className="links">
        <Link to="#portfolio">portfolio</Link>
        <Link to="#about">about</Link>
        <Link to="#contact">contact</Link>
      </div>

    </div>
  );
};

export default Header