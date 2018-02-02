import React, { Component } from 'react';

import Spacer from './Spacer';
import ContactForm from './ContactForm';

import rocksContact from '../assets/rocksContact.jpg';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact main" id="contact">
        <Spacer backgroundImage={rocksContact} />
        {/* <h1>Contact</h1> */}
        <ContactForm />
          
        <div className="contact-links">
          <h3>Don't like contact forms?</h3>
          <p className="right-text">Email:</p>
          <a href="mailto:jathom30@gmail.com?Subject=Oh, hello"><p>jathom30@gmail.com</p></a>
          <p className="right-text">Phone:</p>
          <a href="tel:+1-502-439-1974"><p>502-439-1974</p></a>
          <p className="right-text">Twitter:</p>
          <a href="http://twitter.com/jeffathomas"><p>@jeffathomas</p></a>
        </div>
      </div>
    );
  }
}