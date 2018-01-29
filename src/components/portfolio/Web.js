import React, { Component } from 'react';

import { STNData, AngelData, SignatureData } from '../../data/webImages';

export default class Web extends Component {
  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
    this.state = {
      data: STNData,
    };
  }

  changeImage(e) {
    if (e.target.id === 'stn') {
      this.setState({
        data: STNData,
      });
    } else if (e.target.id === 'angel') {
      this.setState({
        data: AngelData,
      });
    } else if (e.target.id === 'signature') {
      this.setState({
        data: SignatureData,
      });
    }
  }

  render() {
    const {data} = this.state;

    return (
      <div className="web">
        <div className="info">
          <h2>Websites</h2>
          <p>I have a strong interest in front-end web. After completing Code Louisville's Front-End Web Development track as well as their Python track, I've gone on to self-learn SASS, React, and updated my JavaScript learning with CS6.</p>
          <p>As a result, I am proficient in HTML, CSS/SCSS/SASS, JavaScript, JQuery, React, and Python/Django. My projects have been used for Jeffersontown Police's Angel Program, Signature Studio, Small Time Napoleon, and other person projects.</p>
        </div>

        <div className="links">
          <a onClick={this.changeImage} className={data.id === 'web-1' ? 'active' : ''} id="stn">Small Time Napoleon</a>
          <a onClick={this.changeImage} className={data.id === 'web-2' ? 'active' : ''} id="angel">The Angel Program</a>
          <a onClick={this.changeImage} className={data.id === 'web-3' ? 'active' : ''} id="signature">Signature Yearbooks</a>
        </div>

        <div className="portfolio-images">
          <a href={`http://${data.imgLink}`}><img src={ `./images/${data.imgSrc}`} alt={data.altTitle}/></a>
        </div>
      </div>
    );
  }
}