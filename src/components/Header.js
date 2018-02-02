import React, { Component } from 'react';

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

  render () {

    const { nav } = this.state;

    return (
      <div className={nav ? "header full" : "header"}>
    
        <div>
          <a href="#home" onClick={this.handleClick} ><JeffThomasLogo /></a>
          <div className="bun" onClick={this.showNav}>
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