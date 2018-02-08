import React, { Component } from 'react';
import { TimelineMax, Elastic, Power1, Sine } from 'gsap';

import Beetle from './Beetle';

export default class Home extends Component {

  animateTheBeetle() {
    const walk = new TimelineMax();
    walk
      .add('take-off', 5)
      .add('wings-beat', 4.5)
      .add('wings-show', 3)
    walk
      //beetle walks in
      .from("#beetle", 1.75, {y: '40%', autoAlpha:0, ease: Power1.easeOut})
      //shell closes as in just landed
      .to("#left-shell", .25, {rotation:'-24', transformOrigin:'right', ease:Sine.easeInOut, repeat: 0}, '0')
      .to("#right-shell", .25, {rotation:'24', transformOrigin:'left', ease:Sine.easeInOut, repeat: 0}, '.1')
      //legs walk
      .from("#left-front-leg", .5, {rotation: '-20', transformOrigin: '75px bottom', ease:Sine.easeInOut, repeat:2, yoyo:true}, '0')
      .from("#left-mid-leg", .5, {rotation: '-20', transformOrigin: 'right 35px', ease:Sine.easeInOut, repeat:2, yoyo:true}, '.2')
      .to("#left-rear-leg", .5, {rotation: '30', transformOrigin: 'right 35px', ease:Sine.easeInOut, repeat:2, yoyo:true}, '.4')
      
      .to("#right-front-leg", .5, {rotation: '20', transformOrigin: 'left bottom', ease:Sine.easeInOut, repeat:2, yoyo:true}, '.1')
      .from("#right-mid-leg", .5, {rotation: '20', transformOrigin: 'left 35px', ease:Sine.easeInOut, repeat:2, yoyo:true}, '.2')
      .from("#right-rear-leg", .5, {rotation: '-30', transformOrigin: 'left 35px', ease:Sine.easeInOut, repeat:1, yoyo:true}, '.5')
      //shell opens for wings
      .to("#left-shell", 2, {rotation:'0', transformOrigin:'right', ease: Elastic.easeOut.config(2, .75), repeat:0}, '1.5')
      .to("#right-shell", 2, {rotation:'0', transformOrigin:'left', ease: Elastic.easeOut.config(2, .75), repeat:0}, '1.5')
      //wings show
      .fromTo("#left-wing", 3, {rotation: '-40', transformOrigin:'right bottom', autoAlpha: 0}, {rotation: '0', autoAlpha: .75, ease: Elastic.easeOut.config(1, .5)}, 'wings-show')
      .fromTo("#right-wing", 3, {rotation: '40', transformOrigin:'left bottom', autoAlpha: 0}, {rotation: '0', autoAlpha: .75, ease: Elastic.easeOut.config(1, .5)}, 'wings-show')
      //legs retract while flying
      .to("#left-front-leg", .5, {rotation: '-50', transformOrigin: '75px bottom', ease: Power1.easeInOut}, 'take-off')
      .to("#left-mid-leg", .5, {rotation: '-50', transformOrigin: 'right 35px', ease: Power1.easeInOut}, 'take-off')
      .to("#left-rear-leg", .5, {rotation: '-10', transformOrigin: 'right 35px', ease: Power1.easeInOut}, 'take-off')
      
      .to("#right-front-leg", .5, {rotation: '50', transformOrigin: 'left bottom', ease: Power1.easeInOut}, 'take-off')
      .to("#right-mid-leg", .5, {rotation: '50', transformOrigin: 'left 35px', ease: Power1.easeInOut}, 'take-off')
      .to("#right-rear-leg", .5, {rotation: '10', transformOrigin: 'left 35px', ease: Power1.easeInOut}, 'take-off')
      //shell closes slightly midair
      .to("#left-shell", .5, {rotation: '-20', transformOrigin: 'right', ease: Power1.easeInOut}, 'take-off')
      .to("#right-shell", .5, {rotation: '20', transformOrigin: 'left', ease: Power1.easeInOut}, 'take-off')
      //wings beat for flight
      .to("#left-wing", .1, {rotation: '-10', transformOrigin: 'right bottom', repeat: 20}, 'wings-beat')
      .to("#right-wing", .1, {rotation: '10', transformOrigin: 'left bottom', repeat: 20}, 'wings-beat')
      //beetle flies up
      .to("#beetle", 1, {y: '-100%', autoAlpha: 0, scale: 2, ease: Power1.easeInOut}, 'take-off')
  }

  componentDidMount() {
    this.animateTheBeetle();
  }
  
  render() {
    return (
      <div className="home main" id="home">
        <h1>Welcome</h1>
        <p>put things here</p>
        <Beetle />
      </div>
    );
  }
}