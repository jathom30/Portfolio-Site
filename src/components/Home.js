import React, { Component } from 'react';
import { TweenMax, Power2 } from 'gsap';

import BeetlePieces from '../assets/BeetlePieces';

export default class Home extends Component {
  componentDidMount() {
    TweenMax.to("#left-front-leg", 1, {rotation: '-20', transformOrigin: 'right 35px', ease:Power2.easeInOut, repeat:-1, yoyo:true})
    TweenMax.to("#right-front-leg", 1, {rotation: '20', transformOrigin: 'left 35px', ease:Power2.easeInOut, repeat:-1, yoyo:true})
    TweenMax.to("#left-rear-leg", 1, {rotation: '20', transformOrigin: 'right 35px', ease:Power2.easeInOut, repeat:-1, yoyo:true})
    TweenMax.to("#right-rear-leg", 1, {rotation: '-20', transformOrigin: 'left 35px', ease:Power2.easeInOut, repeat:-1, yoyo:true})
  }

  render() {
    return (
      <div className="home main" id="home">
        <h1>Welcome</h1>
        <p>put things here</p>
        <BeetlePieces />
      </div>
    );
  }
}