import React, { Component } from 'react';
import { TimelineMax, Elastic, Sine } from 'gsap';

import BeetlePieces from '../assets/BeetlePieces';
import SocialMedia from './SocialMedia';

export default class Home extends Component {

  animateTheBeetle() {
    const legRepeats = 5;
    const legMovementTime = .25;
    const walk = new TimelineMax();
    walk
      //beetle walks in
      .from("#beetle", 1.7, {y: '80px', autoAlpha:0, ease: Sine.easeOut})
      //start with shell closed
      .set("#left-shell",{rotation:'-20', transformOrigin:'right', ease:Sine.easeInOut, repeat: 0}, '0')
      .set("#right-shell",{rotation:'20', transformOrigin:'left', ease:Sine.easeInOut, repeat: 0}, '0')
      //legs walk
      .to("#left-front-leg", legMovementTime, {rotation: '-20', transformOrigin: '75px bottom', ease:Sine.easeInOut, repeat:legRepeats, yoyo:true}, '0')
      .to("#left-mid-leg", legMovementTime, {rotation: '-20', transformOrigin: 'right 35px', ease:Sine.easeInOut, repeat:legRepeats, yoyo:true}, '.1')
      .to("#left-rear-leg", legMovementTime, {rotation: '30', transformOrigin: 'right top', ease:Sine.easeInOut, repeat:legRepeats, yoyo:true}, '.1')
      
      .to("#right-front-leg", legMovementTime, {rotation: '20', transformOrigin: 'left bottom', ease:Sine.easeInOut, repeat:legRepeats, yoyo:true}, '.2')
      .to("#right-mid-leg", legMovementTime, {rotation: '20', transformOrigin: 'left 35px', ease:Sine.easeInOut, repeat:legRepeats, yoyo:true}, '.3')
      .to("#right-rear-leg", legMovementTime, {rotation: '-30', transformOrigin: 'left top', ease:Sine.easeInOut, repeat:legRepeats, yoyo:true}, '.3')
      //shell opens for wings
      .to("#left-shell", 2, {rotation:'-15', transformOrigin:'right', ease: Elastic.easeOut.config(2, .75), repeat:0}, '1.5')
      .to("#right-shell", 2, {rotation:'15', transformOrigin:'left', ease: Elastic.easeOut.config(2, .75), repeat:0}, '1.6')
      //antenna movements
      .to('#left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '.5')
      .to('#left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '5')
      .to('#left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '10.9')

      .to('#right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '.4')
      .to('#right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '5')  
      .to('#right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '11')
  }

  componentDidMount() {
    this.animateTheBeetle();
  }
  
  render() {
    return (
      <div className="home main" id="home">
        <h1>Jeff Thomas</h1>
        <div className="main-points">
            <h3>Code</h3>
            <h3>Design</h3>
            <h3>Music</h3>
        </div>

        <div className="beetle-main">
          <BeetlePieces />
        </div>

        <div className="talking-points">
          <p>Front-end dev and design.</p>
          <p>React friendly, Jazz Guitarist.</p>
        </div>

        <SocialMedia />
      </div>
    );
  }
}