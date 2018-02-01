import React, { Component } from 'react';

import Web from './portfolio/Web';
import Visual from './portfolio/Visual';
import Audio from './portfolio/Audio';

export default class Portfolio extends Component {
  
  render() {
    return(
      <div className="portfolio main" id="portfolio">
        <div className="main-header">
          <h1>Portfolio</h1>
        </div>
        <Web />
        <Visual />
        <Audio />
      </div>
    )
  }
};