import React, { Component } from 'react';

export default class Web extends Component {
  render() {
    const {webData, changeWebImage} = this.props;

    return (
      <div className="web">
        <div className="info">
          <h2>Websites</h2>
          <p>I have a strong interest in front-end web. After completing Code Louisville's Front-End Web Development track as well as their Python track, I've gone on to self-learn SASS, React, and updated my JavaScript learning with CS6.</p>
          <p>As a result, I am proficient in HTML, CSS/SCSS, JavaScript, JQuery, React, and Python/Django. My projects have been used for Jeffersontown Police's Angel Program, Signature Studio, Small Time Napoleon, and other personal projects.</p>
        </div>

        <div className="box">
          <div className="links">
            <a onClick={changeWebImage} className={webData.id === 'web-1' ? 'active' : ''} id="stn">Small Time Napoleon</a>
            <a onClick={changeWebImage} className={webData.id === 'web-2' ? 'active' : ''} id="angel">The Angel Program</a>
            <a onClick={changeWebImage} className={webData.id === 'web-3' ? 'active' : ''} id="signature">Signature Yearbooks</a>
          </div>

          <div className="portfolio-images">
            <a href={`http://${webData.imgLink}`}><img src={ `./images/${webData.imgSrc}`} alt={webData.altTitle}/></a>
            <p>
              { webData.about }
            </p>
          </div>
        </div>
      </div>
    );
  }
}