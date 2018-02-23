import React, { Component } from 'react';

export default class Print extends Component {

  render() {
    const { imageClicked, digitalData, showImage, hideImage } = this.props;

    return (
      <div className="portfolio-images">
        <div style={!imageClicked ? {display: 'block'} : {display: 'none'} }>
          <div className="left">
            <img onClick={showImage} src="./images/STNEPReleasePoster.jpg" alt="Small Time Napoleon Release Show Poster" id="stn"/>
          </div>
          <div className="center">
            <img onClick={showImage} src="./images/tomwaits.jpg" alt="Tom Waits inspired show poster" id="tom-waits"/>
          </div>
          <div className="right">
            <img onClick={showImage} src="./images/ZBAR.jpg" alt="Zanzabar Show Poster" id="zbar"/>
          </div>
        </div>

        <div style={ imageClicked ? {display: 'block'} : {display: 'none'} }>
          <img 
            className='full-image' 
            onClick={hideImage} 
            src={digitalData.image} 
            alt={digitalData.alt}
          />
          <h2>{ digitalData.title }</h2>
        </div>
        

      </div>
    );
  }
}
