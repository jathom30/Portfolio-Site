import React, { Component } from 'react';

import BeetleIcon from '../assets/BeetleIcon';
import Hamburger from '../assets/Hamburger';
import { TimelineLite } from 'gsap';

export default class Header extends Component {

  crossBuns() {
    const tl = new TimelineLite();
    tl
      .to("#top", .5, {y: '30px'})
      .to("#bottom", .5, {y: '-30px'}, 0)
      .to("#top", .3, {rotation: -45, transformOrigin: 'center'}, .3)
      .to("#bottom", .3, {rotation: 45, transformOrigin: 'center'}, .3)
      .to("#middle", .1, {autoAlpha: 0}, .2)
  }
  uncrossBuns() {
    const tl = new TimelineLite();
    tl
      .to("#top", .3, {rotation: 0})
      .to("#bottom", .3, {rotation: 0}, 0)
      .to("#top", .3, {y: 0}, .3)
      .to("#bottom", .3, {y: 0}, .3)
      .to("#middle", .5, {autoAlpha: 1}, .2)
  }


  render () {
    const { nav, showHideNav, hideNav } = this.props;

    if (nav) {
      this.crossBuns();
    } else {
      this.uncrossBuns();
    }

    return (
      <div id="header" className={nav ? "header full" : "header"} onClick={showHideNav}>
    
        <div className="nav-buttons">
          <Hamburger />
        </div>
    
        <div className="header-links" style={!nav ? {display: 'none'} : {} } >
          <a href="#home" onClick={hideNav}><BeetleIcon /></a>
          <a href="#portfolio" onClick={hideNav}>portfolio</a>
          <a href="#about" onClick={hideNav}>about</a>
          <a href="#contact" onClick={hideNav}>contact</a>
        </div>
    
      </div>
    );
  }
}