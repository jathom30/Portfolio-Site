import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Bloom extends Component {
  render() {
    return (
      <div className="portfolio-images enhance">
        <NavLink exact to="/">
          <img src="./images/BloomCover.jpg" alt="Bloom Cover" className="full-image" />
        </NavLink>
        <h3>Bloom Yearbook 2016</h3>
      </div>
      
    );
  }
}