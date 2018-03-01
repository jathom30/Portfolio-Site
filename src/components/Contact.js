import React, { Component } from 'react';

import Beetle from './Beetle';
// import PhoneIcon from '../assets/PhoneIcon';
// import MailIcon from '../assets/MailIcon';
// import TwitterIcon from '../assets/TwitterIcon';
// import GitIcon from '../assets/GitIcon';

import { ContactData } from '../data/contactGroups';

export default class Contact extends Component {
  render() {

    //map contactGroups instead of writing each element
    const contactGroupData = ContactData;
    const contactGroups = contactGroupData.map((contactGroupData) => 
      <div className="contact-group" key={contactGroupData.text}>
        <a href={contactGroupData.href} rel={contactGroupData.rel} target={contactGroupData.target}><p>{contactGroupData.text}</p></a>
        {contactGroupData.icon}
      </div>
    );

    return (
      <div className="contact main" id="contact">
        <Beetle title="Contact" />

        <div className="contact-links">
          {contactGroups}
        </div>
      </div>
    );
  }
}