import React, { Component } from 'react';

export default class WebUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {display: 'none'},
    };
  }

  render() {
    return (
      <div className="web">
        <div className="info">
          <h2>Websites</h2>
          <p>I have a strong interest in front-end web. After completing Code Louisville's Front-End Web Development track as well as their Python track, I've gone on to self-learn SASS, React, and updated my JavaScript learning with CS6.</p>
          <p>As a result, I am proficient in HTML, CSS/SCSS/SASS, JavaScript, JQuery, React, and Python/Django. My projects have been used for Jeffersontown Police's Angel Program, Signature Studio, Small Time Napoleon, and other person projects.</p>
        </div>

        <div className="links">
          <a onClick={ () => this.setState( {value: {display: 'block'} } ) } >STN</a>
          <a>Angel</a>
          <a>Signature</a>
        </div>

        <div className="portfolio-images">
          <img id="stn" style={this.state.value} src="./images/smallTimeNapoleonDuo.png" alt="" />
          <img style={this.state.value} id="signature" src="./images/SignatureDuo.png" alt="" />
          <img style={{display: 'none'}} id="angel" src="./images/tomwaits.jpg" alt="" />
        </div>

      </div>
    );
  }
}