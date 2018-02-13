import React, { Component } from 'react';

import SocialMedia from './SocialMedia';
import Beetle from './Beetle';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact main" id="contact">
        <Beetle title="Contact" />

        <div className="contact-links">
          <p className="right-text">Email:</p>
          <a href="mailto:jathom30@gmail.com?Subject=Oh, hello"><p>jathom30@gmail.com</p></a>
          <p className="right-text">Phone:</p>
          <a href="tel:+1-502-439-1974"><p>502-439-1974</p></a>
          <p className="right-text">Twitter:</p>
          <a href="http://twitter.com/jeffathomas"><p>@jeffathomas</p></a>
        </div>
        <SocialMedia />
      </div>
    );
  }
}