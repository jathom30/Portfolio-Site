import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class STNRelease extends Component {
  render() {
    return (
      <div className="portfolio-images enhance">
        <NavLink exact to="/digital">
          <img src="./images/STNEPReleasePoster.jpg" alt="Small Time Napoleon CD release poster" className="full-image" />
        </NavLink>
        <h3>Small Time Napoleon CD Release Show Poster 2017</h3>
      </div>
      
    );
  }
}