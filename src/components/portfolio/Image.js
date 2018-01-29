import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const {imageClicked, data} = this.state;

    return (
      <div>
        this is the thing
        <img 
            className={imageClicked ? 'full-image' : ''} 
            onClick={this.hideImage} 
            src={data.image} 
            alt={data.alt}
          />
          <h2>{ data.title }</h2>
      </div>
    );
  }
}