import React, { Component } from 'react';

import Spacer from './Spacer';
import Web from './portfolio/Web';
import Visual from './portfolio/Visual';
import Audio from './portfolio/Audio';
import rocksPortfolio from '../assets/rocksPortfolio.jpg';

export default class Portfolio extends Component {
  
  render() {
    return(
      <div className="portfolio main" id="portfolio">
        <Spacer backgroundImage={rocksPortfolio} />
        {/* <div className="main-header">
          <h1>Portfolio</h1>
        </div> */}
        <Web />
        <Visual />
        <Audio />
      </div>
    )
  }
};