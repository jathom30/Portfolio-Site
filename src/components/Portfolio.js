import React, { Component } from 'react';

import Web from './portfolio/Web';
import Visual from './portfolio/Visual';
import Audio from './portfolio/Audio';


export default class Portfolio extends Component {
  
  render() {
    return(
      <div className="portfolio main" id="portfolio">
        <h1>Portfolio</h1>

        <Web />
        <Visual />
        <Audio />

      </div>
    )
  }
};