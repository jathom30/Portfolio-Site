import React, { Component } from 'react';

// import Spacer from './Spacer';
import Web from './portfolio/Web';
import Visual from './portfolio/Visual';
import Audio from './portfolio/Audio';

import Beetle from '../assets/Beetle';

export default class Portfolio extends Component {
  
  render() {
    return(
      <div className="portfolio main" id="portfolio">
        <div className="beetle-pos">
          <h1>Portfolio</h1>
          <Beetle />
        </div>
        
        <Web />
        <Visual />
        <Audio />
      </div>
    )
  }
};