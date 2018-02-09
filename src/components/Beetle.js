import React, { Component } from 'react';
import { TimelineMax, Sine } from 'gsap';

import RandomBeetle from '../assets/RandomBeetle';

export default class Beetle extends Component {

  walkingMotion() {
    const animation = new TimelineMax();
    animation
      //legs walk
      .from("#random-left-front-leg", .5, {rotation: '-20', transformOrigin: '75px bottom', ease:Sine.easeInOut, repeat:18, yoyo:true}, '0')
      .from("#random-left-mid-leg", .5, {rotation: '-20', transformOrigin: 'right 35px', ease:Sine.easeInOut, repeat:18, yoyo:true}, '.2')
      .to("#random-left-rear-leg", .5, {rotation: '30', transformOrigin: 'right 35px', ease:Sine.easeInOut, repeat:17, yoyo:true}, '.4')
      
      .to("#random-right-front-leg", .5, {rotation: '20', transformOrigin: 'left bottom', ease:Sine.easeInOut, repeat:18, yoyo:true}, '.1')
      .from("#random-right-mid-leg", .5, {rotation: '20', transformOrigin: 'left 35px', ease:Sine.easeInOut, repeat:17, yoyo:true}, '.4')
      .from("#random-right-rear-leg", .5, {rotation: '-30', transformOrigin: 'left 35px', ease:Sine.easeInOut, repeat:18, yoyo:true}, '.5')
      //shell closes as in just landed
      .fromTo("#random-left-shell", .75, {rotation:'-10', transformOrigin:'right', ease:Sine.easeInOut}, {rotation: '-20', ease:Sine.easeInOut, repeat: 11, yoyo: true}, '0')
      .fromTo("#random-right-shell", .75, {rotation:'10', transformOrigin:'left', ease:Sine.easeInOut}, {rotation: '20', ease:Sine.easeInOut, repeat: 11, yoyo: true},'.1')
  }

  beetleAntenna() {
    const animation = new TimelineMax();
    animation
      .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '1.5')
      .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '5')
      .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '9')
      .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '10.9')
      .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '1.4')
      .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '5')
      .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '8.9')
      .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '11')
  }

  movingBeetle() {
    const animation = new TimelineMax();
    animation
      .set("#random-beetle", {rotation: '225', transformOrigin: 'center center', y: '-400px', x: '400px'})
      .to("#random-beetle", 4, {y: '400px', x: '-400px'})
      .set("#random-beetle", {rotation: '-45', y: '400px', x: '400px'})
      .to("#random-beetle", 3.5, {y: '-400px', x: '-400px'})
      .set("#random-beetle", {rotation: '0', y: '420', x: '0'})
      .to("#random-beetle", 2, {y: '0', x: '0', ease: Sine.easeOut})
  }

  getRandom(min, max) {
    return min + Math.random() * (max-min);
  }

  componentDidMount() {
    this.movingBeetle();
    this.walkingMotion();
    this.beetleAntenna();
  }

  render() {
    return (
      <div className="section-h1">
        <h1>{ this.props.title }</h1>
        <div className="beetle-pos">
          <RandomBeetle />
        </div>
      </div>
    );
  }
}