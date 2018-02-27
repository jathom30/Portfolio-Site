import React, { Component } from 'react';

import Beetle from './Beetle';
import PhoneIcon from '../assets/PhoneIcon';
import MailIcon from '../assets/MailIcon';
import TwitterIcon from '../assets/TwitterIcon';
import GitIcon from '../assets/GitIcon';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact main" id="contact">
        <Beetle title="Contact" />

        <div className="contact-links">

          <div className="contact-group">
            <a href="mailto:jathom30@gmail.com?Subject=Oh, hello"><p>jathom30@gmail.com</p></a>
            <MailIcon />
          </div>
          <div className="contact-group">
            <a href="tel:+1-502-439-1974"><p>502-439-1974</p></a>
            <PhoneIcon />
          </div>

          <div className="contact-group">
            <a href="http://twitter.com/jeffathomas" rel="noopener noreferrer" target="_blank"><p>@jeffathomas</p></a>
            <TwitterIcon />
          </div>

          <div className="contact-group">
            <a href="http://github.com/jathom30" rel="noopener noreferrer" target="_blank"><p>/jathom30</p></a>
            <GitIcon />
          </div>

        </div>
      </div>
    );
  }
}