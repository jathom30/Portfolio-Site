import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class TomWaits extends Component {
  render() {
    return (
      <div className="portfolio-images enhance">
        <NavLink exact to="/digital">
          <img src="./images/tomwaits.jpg" alt="Tom Waits inspired show poster" className="full-image" />
        </NavLink>
        <h3>Bella Muerta Show Poster, Tom Waits inspired 2016</h3>
      </div>
      
    );
  }
}