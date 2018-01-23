import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Print extends Component {

  render() {

    return (
      <div className="portfolio-images">
        <div className="left">
          <NavLink to="/bloom">
            <img src="./images/BloomCover.jpg" alt="Bloom Cover" />
          </NavLink>
        </div>
        <div className="center">
          <NavLink to="/churchill">
            <img src="./images/churchillParkCover.jpg" alt="Churchill Park Cover" />
          </NavLink>
        </div>
        <div className="right">
          <NavLink to="/binet">
            <img src="./images/BinetCover.jpg" alt="Binet Cover" />
          </NavLink>
        </div>
      </div>
    );
  }
}