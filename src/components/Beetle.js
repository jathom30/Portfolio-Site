import React, { Component } from 'react';
import { TimelineMax, Sine } from 'gsap';

import RandomBeetle from '../assets/RandomBeetle';

export default class Beetle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runaway: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      runaway: true,
    });
    //after animation runs, flip to false
    setTimeout(function(){
      this.setState({
        runaway: false,
      });
    }.bind(this), 7000);
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  antennaMotion() {
    const animation = new TimelineMax({repeat:-1});
  
    animation
    //set legs
    .set('#random-left-mid-leg', {rotation:'15', transformOrigin:'right'})
    .set('#random-right-mid-leg', {rotation:'-15', transformOrigin:'left'})
    .set('#random-left-rear-leg', {rotation:'20', transformOrigin:'right'})
    .set('#random-right-rear-leg', {rotation:'-20', transformOrigin:'left'})
    //antenna movements
    .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '.5')
    .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '5')
    .to('#random-left-antenna', .1, {rotation: '10', transformOrigin:'right', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '10.9')

    .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '.4')
    .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '5')  
    .to('#random-right-antenna', .1, {rotation: '-10', transformOrigin:'left', ease: Sine.easeInOut, repeat: 1, yoyo: true}, '11')
    //quick shell click
    .fromTo('#random-left-shell', .1, {rotation: '-15', transformOrigin: 'right'}, {rotation: '-20', repeat: 1, yoyo: true}, '3')
    .fromTo('#random-right-shell', .1, {rotation: '15', transformOrigin: 'left'}, {rotation: '20', repeat: 1, yoyo: true}, '3')
    .fromTo('#random-left-shell', .15, {rotation: '-15', transformOrigin: 'right'}, {rotation: '-20', repeat: 1, yoyo: true}, '7.2')
    .fromTo('#random-right-shell', .15, {rotation: '15', transformOrigin: 'left'}, {rotation: '20', repeat: 1, yoyo: true}, '7.2')
    .repeatDelay(this.getRandomArbitrary(1,4));
  }

  runMotion() {
    const animation = new TimelineMax();
    animation
    //legs walk
    .to("#random-left-front-leg", .25, {rotation: '-30', transformOrigin: '75px bottom', ease:Sine.easeInOut, repeat:23, yoyo:true})
    .to("#random-left-mid-leg", .25, {rotation: '-20', transformOrigin: 'right 35px', ease:Sine.easeInOut, repeat:23, yoyo:true}, '.1')
    .to("#random-left-rear-leg", .25, {rotation: '40', transformOrigin: 'right top', ease:Sine.easeInOut, repeat:23, yoyo:true}, '.1')
    
    .to("#random-right-front-leg", .25, {rotation: '30', transformOrigin: 'left bottom', ease:Sine.easeInOut, repeat:23, yoyo:true}, '.2')
    .to("#random-right-mid-leg", .25, {rotation: '20', transformOrigin: 'left 35px', ease:Sine.easeInOut, repeat:23, yoyo:true}, '.3')
    .to("#random-right-rear-leg", .25, {rotation: '-40', transformOrigin: 'left top', ease:Sine.easeInOut, repeat:23, yoyo:true}, '.3');  
  }

  moveBeetle() {
    const animation = new TimelineMax();
    animation
    .to('#random-beetle', 1, {y:-400, ease: Sine.easeIn})
    .set('#random-beetle', {x:400, y:400, rotation: -45, transformOrigin: 'center'})
    .to('#random-beetle', 2, {x:-400,y:-400})
    .set('#random-beetle', {x:400, y:-400, rotation: 225})
    .to('#random-beetle', 2, {x:-400,y:400})
    .set('#random-beetle', {x:0, y:400, rotation:0})
    .to('#random-beetle', 1, {x:0, y:0, ease:Sine.easeOut})
  }
  
  componentDidMount() {
    this.antennaMotion();
  }
  
  render() {
    const {runaway} = this.state;
    
    if (runaway) {
      console.log('run away');
      //add moving animation if runaway is true(after click)
      this.runMotion();
      this.moveBeetle();
      
    }

    return (
      <div className={runaway ? 'section-h1 no-click' : 'section-h1'} onClick={this.handleClick}>
        <h1>{ this.props.title }</h1>
        <div className="beetle-pos">
          <RandomBeetle />
        </div>
      </div>
    );
  }
}