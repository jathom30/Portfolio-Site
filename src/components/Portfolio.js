import React, { Component } from 'react';

import Web from './portfolio/Web';
import Visual from './portfolio/Visual';
import Audio from './portfolio/Audio';
import Beetle from './Beetle';


export default class Portfolio extends Component {
  render() {
    //web props
    const { webData, changeWebImage } = this.props;
    //visual props
    const { hasVisualClass, changeVisualImages } = this.props;
      //print props
    const { imageClicked, printData, digitalData, showImage, hideImage } = this.props;

    return(
      <div className="portfolio main" id="portfolio">

        <Beetle title="Portfolio" />
        
        <Web 
          webData={webData}
          changeWebImage={changeWebImage} />

        <Visual
          hasVisualClass={hasVisualClass}
          changeVisualImages={changeVisualImages}
          imageClicked={imageClicked}
          //PRINT & DIGITAL
          showImage={showImage}
          hideImage={hideImage}
          //PRINT
          printData={printData}
          //DIGITAL
          digitalData={digitalData} />
        
        <Audio />
      </div>
    )
  }
};