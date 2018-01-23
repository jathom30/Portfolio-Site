import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Churchill extends Component {
  render() {
    return (
      <div className="portfolio-images enhance">
        <NavLink exact to="/">
          <img src="./images/churchillParkCover.jpg" alt="Churchill Park Cover" className="full-image" />
        </NavLink>
          <h3>Churchill Park Yearbook 2017</h3>
      </div>
      
    );
  }
}