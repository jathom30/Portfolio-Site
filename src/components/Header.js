import React, { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';

// import BeetleIcon from '../assets/BeetleIcon';
import Hamburger from '../assets/Hamburger';

export default class Header extends Component {
  // componentDidMount() {
  //   const tl = new TimelineMax(),
  //         header = document.getElementById('header'),
  //         logo = document.getElementById('logo'),
  //         hamburger = document.getElementById('hamburger');

  //   tl
  //     .from(header, 2, {y: '-100%', autoAlpha: 0, ease: Power1.easeOut})
  //     .from(logo, 1, {autoAlpha: 0, ease: Power1.easeInOut}, 1)
  //     .from(hamburger, 1, {autoAlpha: 0, ease: Power1.easeInOut}, 1);
  // }


  render () {

    const { nav, showHideNav, hideNav } = this.props;

    return (
      <div id="header" className={nav ? "header full" : "header"} onClick={showHideNav}>
    
        <div className="nav-buttons">
          {/* <a id="logo" href="#home" onClick={hideNav} ><BeetleIcon /></a> */}
          {/* <div id="hamburger" className="bun" onClick={showHideNav}>
            <div className={ nav ? 'hamburger exposed' : 'hamburger'}></div>
          </div> */}
          <Hamburger />
        </div>
    
        <div className="header-links" style={!nav ? {display: 'none'} : {} } >
          <a href="#portfolio" onClick={hideNav}>portfolio</a>
          <a href="#about" onClick={hideNav}>about</a>
          <a href="#contact" onClick={hideNav}>contact</a>
        </div>
    
      </div>
    );
  }
}