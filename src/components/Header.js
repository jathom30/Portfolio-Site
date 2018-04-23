import React, { Component } from 'react';

import BeetleIcon from '../assets/BeetleIcon';
import Hamburger from '../assets/Hamburger';

export default class Header extends Component {

  render () {
    const { nav, showHideNav, hideNav } = this.props;

    return (
      <div id="header" className={nav ? "header full" : "header"} onClick={showHideNav}>
    
        <div className="nav-buttons">
          <Hamburger />
        </div>
    
        <div className={nav ? "header-links show" : "header-links"} >
          <a href="#home" onClick={hideNav}><BeetleIcon /></a>
          <a href="#portfolio" onClick={hideNav}>portfolio</a>
          <a href="#about" onClick={hideNav}>about</a>
          <a href="#contact" onClick={hideNav}>contact</a>
        </div>
    
      </div>
    );
  }
}