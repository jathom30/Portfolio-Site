import React, { Component } from 'react';
// import Image from './Image';

import { 
  STNData, 
  TomWaitsData, 
  ZbarData } from '../../data/portfolioImages';

export default class Print extends Component {
  constructor(props) {
    super(props);
    this.showImage = this.showImage.bind(this);
    this.hideImage = this.hideImage.bind(this);
    this.state = {
      imageClicked: false,
      data: STNData,
    };
  }

  showImage(e) {
    this.setState({
      imageClicked: true,
    });
    if (e.target.id === 'stn') {
      this.setState({
        data: STNData,
      });
    } else if (e.target.id === 'tom-waits') {
      this.setState({
        data: TomWaitsData,
      });
    } else if (e.target.id === 'zbar') {
      this.setState({
        data: ZbarData,
      });
    }
  }

  hideImage(e) {
    this.setState({
      imageClicked: false,
    });
  }


  render() {
    const { imageClicked, data } = this.state;

    return (
      <div className="portfolio-images">
        <div style={!imageClicked ? {display: 'block'} : {display: 'none'} }>
          <div className="left">
            <img onClick={this.showImage} src="./images/STNEPReleasePoster.jpg" alt="Small Time Napoleon Release Show Poster" id="stn"/>
          </div>
          <div className="center">
            <img onClick={this.showImage} src="./images/tomwaits.jpg" alt="Tom Waits inspired show poster" id="tom-waits"/>
          </div>
          <div className="right">
            <img onClick={this.showImage} src="./images/ZBAR.jpg" alt="Zanzabar Show Poster" id="zbar"/>
          </div>
        </div>

        <div style={ imageClicked ? {display: 'block'} : {display: 'none'} }>
          {/* <Image data={this.data} /> */}
          <img 
            className='full-image' 
            onClick={this.hideImage} 
            src={data.image} 
            alt={data.alt}
          />
          <h2>{ data.title }</h2>
        </div>
        

      </div>
    );
  }
}


