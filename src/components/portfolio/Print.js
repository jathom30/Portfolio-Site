import React, { Component } from 'react';
// import Image from './Image';

import { 
  BloomData, 
  ChurchillData, 
  BinetData } from '../../data/portfolioImages';

export default class Print extends Component {
  constructor(props) {
    super(props);
    this.showImage = this.showImage.bind(this);
    this.hideImage = this.hideImage.bind(this);
    this.state = {
      imageClicked: false,
      data: BloomData,
    };
  }

  showImage(e) {
    this.setState({
      imageClicked: true,
    });
    if (e.target.id === 'bloom') {
      this.setState({
        data: BloomData,
      });
    } else if (e.target.id === 'churchill') {
      this.setState({
        data: ChurchillData,
      });
    } else if (e.target.id === 'binet') {
      this.setState({
        data: BinetData,
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
            <img onClick={this.showImage} src="./images/BloomCover.jpg" alt="Bloom Cover" id="bloom"/>
          </div>
          <div className="center">
            <img onClick={this.showImage} src="./images/churchillParkCover.jpg" alt="Churchill Park Cover" id="churchill"/>
          </div>
          <div className="right">
            <img onClick={this.showImage} src="./images/BinetCover.jpg" alt="Binet Cover" id="binet"/>
          </div>
        </div>

        <div style={ imageClicked ? {display: 'block'} : {display: 'none'} }>
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


