import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Digital extends Component {
  render() {
    return (
      <div className="portfolio-images">
        <div className="left">
          <NavLink to="zBar">
            <img src="./images/ZBAR.jpg" alt="Zanzabar Show Poster" />
          </NavLink>
        </div>
        <div className="center">
          <NavLink to="/tomWaits">
            <img src="./images/tomwaits.jpg" alt="Tom Waits Inspired Show Poster" />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/stnRelease">
            <img src="./images/STNEPReleasePoster.jpg" alt="Small Time Napoleon EP Release Show Poster" />
          </NavLink>
        </div>
      </div>
    );
  }
}