import React, { Component } from 'react';

import Web from './portfolio/Web';
import Visual from './portfolio/Visual';
import Audio from './portfolio/Audio';
import Beetle from './Beetle';


export default class Portfolio extends Component {
  render() {
    return(
      <div className="portfolio main" id="portfolio">

        <Beetle title="Portfolio" />
        
        <Web />
        <Visual />
        <Audio />
      </div>
    )
  }
};