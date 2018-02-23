import React, { Component } from 'react';

export default class Print extends Component {

  render() {
    const { imageClicked, printData, showImage, hideImage } = this.props;

    return (
      <div className="portfolio-images">
        <div style={!imageClicked ? {display: 'block'} : {display: 'none'} }>
          <div className="left">
            <img onClick={showImage} src="./images/BloomCover.jpg" alt="Bloom Cover" id="bloom"/>
          </div>
          <div className="center">
            <img onClick={showImage} src="./images/churchillParkCover.jpg" alt="Churchill Park Cover" id="churchill"/>
          </div>
          <div className="right">
            <img onClick={showImage} src="./images/BinetCover.jpg" alt="Binet Cover" id="binet"/>
          </div>
        </div>

        <div style={ imageClicked ? {display: 'block'} : {display: 'none'} }>
          <img 
            className='full-image'
            onClick={hideImage} 
            src={printData.image} 
            alt={printData.alt}
          />
          <h2>{ printData.title }</h2>
        </div>
        

      </div>
    );
  }
}
