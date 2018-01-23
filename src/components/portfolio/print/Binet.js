import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Binet extends Component {
  render() {
    return (
      <div className="portfolio-images enhance">
        <NavLink exact to="/">
          <img src="./images/BinetCover.jpg" alt="Binet Cover" className="full-image" />
        </NavLink>
        <h3>Binet Yearbook 2018</h3>
      </div>
      
    );
  }
}