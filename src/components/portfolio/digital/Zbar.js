import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Zbar extends Component {
  render() {
    return (
      <div className="portfolio-images enhance">
        <NavLink exact to="/digital">
          <img src="./images/ZBAR.jpg" alt="Zanzabar show poster" className="full-image" />
        </NavLink>
        <h3>Zanzabar show poster 2016</h3>
      </div>
      
    );
  }
}