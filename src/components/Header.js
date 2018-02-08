import React, { Component } from 'react';
import { TimelineMax, Power1 } from 'gsap';

import JeffThomasLogo from '../assets/JeffThomasLogo';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
    this.showNav = this.showNav.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showNav(e) {
    const currentState = this.state.nav;
    this.setState({
      nav: !currentState,
    });
  }

  handleClick(e) {
    this.setState({
      nav: false,
    });

  }

  componentDidMount() {
    const opening = new TimelineMax(),
          header = document.getElementById('header'),
          logo = document.getElementById('logo'),
          hamburger = document.getElementById('hamburger');

    opening
    .from(header, 2, {y: '-100%', autoAlpha: 0, ease: Power1.easeOut})
    .from(logo, 1, {autoAlpha: 0, ease: Power1.easeInOut}, 1)
    .from(hamburger, 1, {autoAlpha: 0, ease: Power1.easeInOut}, 1);
  }


  render () {

    const { nav } = this.state;

    return (
      <div id="header" className={nav ? "header full" : "header"}>
    
        <div>
          <a id="logo" href="#home" onClick={this.handleClick} ><JeffThomasLogo /></a>
          <div id="hamburger" className="bun" onClick={this.showNav}>
            <div className={ nav ? 'hamburger exposed' : 'hamburger'}></div>
          </div>
        </div>
    
        <div className="header-links" style={!nav ? {display: 'none'} : {} } >
          <a href="#portfolio" onClick={this.handleClick}>portfolio</a>
          <a href="#about" onClick={this.handleClick}>about</a>
          <a href="#contact" onClick={this.handleClick}>contact</a>
        </div>
    
      </div>
    );
  }
}