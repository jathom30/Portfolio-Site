import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

// import WebSamples from './WebSamples';

export default class Web extends Component {
  render() {
    return(
      <div className="web">
        <div className="info">
          <h2>Websites</h2>
          <p>I have a strong interest in front-end web. After completing Code Louisville's Front-End Web Development track as well as their Python track, I've gone on to self-learn SASS, React, and updated my JavaScript learning with CS6.</p>
          <p>As a result, I am proficient in HTML, CSS/SCSS/SASS, JavaScript, JQuery, React, and Python/Django. My projects have been used for Jeffersontown Police's Angel Program, Signature Studio, Small Time Napoleon, and other person projects.</p>
        </div>

        <div className="links">
          <NavLink to="/stn">STN</NavLink>
        </div>

        <div className="portfolio-images">
          <img src="./images/smallTimeNapoleonDuo.png" alt="" />
        </div>
      </div>
    )
  }
};