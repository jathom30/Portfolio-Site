import React, { Component } from 'react';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
      imgSrc: './images/tomwaits.jpg',
    };
  }

  changeTitle(e) {
    if (e.target.id === 'zbar') {
      
      this.setState({
        imgSrc: './images/ZBAR.jpg',
      });
    } else if (e.target.id === 'tom-waits') {
      this.setState({
        imgSrc: './images/tomwaits.jpg',
      });
    }
  }

  render() {
    return(
      <div className="">
        <h1 onClick={this.changeTitle} id="zbar" className={this.state.imgSrc === './images/ZBAR.jpg' ? 'test' : ''}>ZBAR</h1>
        <h1 onClick={this.changeTitle} id="tom-waits" className={this.state.imgSrc === './images/tomwaits.jpg' ? 'test' : ''}>Tom Waits</h1>

        <img src={this.state.imgSrc} alt="test" width={350}/>

      </div>
      
    );
  }
}