import React from 'react';
// import Spacer from './Spacer';

import BeetleShell from '../assets/BeetleShell';
import jeffThomas from '../assets/jeffThomas.jpg';

const headshotBackground = {
  background: 'url(' + jeffThomas + ') blue',
  backgroundOrigin: 'center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};


const About = () => {
  return (
    <div id="about">
      <div className="beetle-pos">
        <h1>About</h1>
        <BeetleShell />
      </div>
      <div className="about main" >

        <div className="info">
          <div className="bio">
            <div className="jeff-thomas">
              <div className="jeff-thomas-bg" style={ headshotBackground } ></div>
              <h2>Jeff Thomas</h2>
            </div>
            <h2 className="title">Bio</h2>
            <p className="highlight">Jeff Thomas is an unashamed Junkrat main.</p> 
            <p>Jeff graduated from the University of Louisville with a BA in Jazz Studies with an emphasis in Guitar in 2011. Since then he has enjoyed playing in Louisville based jazz band, Small Time Napoleon. With STN he has played hundreds of shows across several states to audiences ranging from intimate private shows to large outdoor festivals.</p>
            <p>He currenty works as a photo editor and graphic designer for a local photography studio. Doing so has allowed Jeff to grow as a graphic designer by building custom yearbooks and senior composites for several Louisville area schools.</p>
            <p>During the past two to three years, Jeff has had an increased interest in graphic design and coding. This eventually led to an enrollment in Code Louisville in their Front-End Web Development and Python courses. Since graduating, Jeff has continued to self learn new languages and libraries in an attempt to stay current with the day's tech.</p>
          </div>

          <div className="education">
            <h2>education/experience</h2>
            <ul>
              <li>University of Louisville - BA Jazz Studies - 2011</li>
              <li>Small Time Napoleon named "Jazz/Avant Garde Artist of the Year" - Louisville Music Awards - 2015</li>
              <li>Code Louisville - Front-End Web Development - 2017</li>
              <li>Code Louisville - Python - 2017</li>
              <li>Signature Studio Yearbook Website Deployed - 2017</li>
              <li>Small Time Napoleon named "Jazz/Avant Garde Artist of the Year" - Louisville Music Awards - 2017</li>
              <li>Small Time Napoleon Website Deployed - 2018</li>
              <li>Angel Website Deployed - 2018</li>
            </ul>
          </div>
        </div>

        <div className="languages-programs">
          <div className="languages">
            <h2>Languages</h2>
              <p>HTML</p>
              <p>CSS/SCSS/SASS</p>
              <p>JavaScript/React/jQuery</p>
              <p>Python/Django</p>
          </div>

          <div className="programs">
            <h2>Programs</h2>
              <p>Photoshop</p>
              <p>InDesign</p>
              <p>Illustrator</p>
              <p>Logic Pro</p>
          </div>
        </div>

        <div className="info">
          <div className="availability">
            <h2>Availability</h2>
            <p>I'm currently available for front-end web/design work. I enjoy learning and am always interested in learning new languages and libraries. I am available for contract work as well as full/part-time employement.</p>
          </div>
        </div>

      </div>
    </div>
  );
};



export default About