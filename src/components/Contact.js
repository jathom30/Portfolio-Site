import React, { Component } from 'react';

import SocialMedia from './SocialMedia';
import Beetle from './Beetle';
import PhoneIcon from '../assets/PhoneIcon';
import MailIcon from '../assets/MailIcon';
import TwitterIcon from '../assets/TwitterIcon';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact main" id="contact">
        <Beetle title="Contact" />

        <div className="contact-links">

          <MailIcon />
          <a href="mailto:jathom30@gmail.com?Subject=Oh, hello"><p>jathom30@gmail.com</p></a>

          <PhoneIcon />
          <a href="tel:+1-502-439-1974"><p>502-439-1974</p></a>

          <TwitterIcon />
          <a href="http://twitter.com/jeffathomas" rel="noopener noreferrer" target="_blank"><p>@jeffathomas</p></a>
        
        </div>
        <SocialMedia />
      </div>
    );
  }
}