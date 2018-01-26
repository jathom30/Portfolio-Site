import React, { Component } from 'react';

export default class Web extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
    }
    this.showSTN = this.showSTN.bind(this);
    this.showAngel = this.showAngel.bind(this);
    this.showSignature = this.showSignature.bind(this);
  }

  showSTN() {
    let target = document.getElementById('stn');
    let notTarget1 = document.getElementById('signature');
    let notTarget2 = document.getElementById('angel');
    let targetBtn = document.getElementById('stn-btn');
    let notTargetBtn1 = document.getElementById('signature-btn');
    let notTargetBtn2 = document.getElementById('angel-btn');

    targetBtn.classList.add('active');
    notTargetBtn1.classList.remove('active');
    notTargetBtn2.classList.remove('active');

    target.style.display = 'block';
    notTarget1.style.display = 'none';
    notTarget2.style.display = 'none';
  }

  showAngel() {
    let target = document.getElementById('angel');
    let notTarget1 = document.getElementById('signature');
    let notTarget2 = document.getElementById('stn');
    let targetBtn = document.getElementById('angel-btn');
    let notTargetBtn1 = document.getElementById('stn-btn');
    let notTargetBtn2 = document.getElementById('signature-btn');

    targetBtn.classList.add('active');
    notTargetBtn1.classList.remove('active');
    notTargetBtn2.classList.remove('active');

    target.style.display = 'block';
    notTarget1.style.display = 'none';
    notTarget2.style.display = 'none';
  }

  showSignature() {
    let target = document.getElementById('signature');
    let notTarget1 = document.getElementById('stn');
    let notTarget2 = document.getElementById('angel');
    let targetBtn = document.getElementById('signature-btn');
    let notTargetBtn1 = document.getElementById('stn-btn');
    let notTargetBtn2 = document.getElementById('angel-btn');

    targetBtn.classList.add('active');
    notTargetBtn1.classList.remove('active');
    notTargetBtn2.classList.remove('active');

    target.style.display = 'block';
    notTarget1.style.display = 'none';
    notTarget2.style.display = 'none';
  }

  render() {

    return(
      <div className="web">
        <div className="info">
          <h2>Websites</h2>
          <p>I have a strong interest in front-end web. After completing Code Louisville's Front-End Web Development track as well as their Python track, I've gone on to self-learn SASS, React, and updated my JavaScript learning with CS6.</p>
          <p>As a result, I am proficient in HTML, CSS/SCSS/SASS, JavaScript, JQuery, React, and Python/Django. My projects have been used for Jeffersontown Police's Angel Program, Signature Studio, Small Time Napoleon, and other person projects.</p>
        </div>

        <div className="links">
          <a id="stn-btn" onClick={ this.showSTN } className="active">STN</a>
          <a id="angel-btn" onClick={ this.showAngel } >Angel</a>
          <a id="signature-btn" onClick={ this.showSignature } >Signature</a>
        </div>

        <div className="portfolio-images">
          <a href="http://smalltimenapoleon.com" ><img id="stn" src="./images/smallTimeNapoleonDuo.png" alt="" /></a>
          <a href="http://jathom30.github.io/signature-yearbook-pricing-guide/"><img style={ {display: 'none'} }id="signature" src="./images/SignatureDuo.png" alt="" /></a>
          <img style={ {display: 'none'} }id="angel" src="./images/tomwaits.jpg" alt="" />
        </div>
      </div>
    )
  }
};