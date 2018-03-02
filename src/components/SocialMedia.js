import React from 'react';


import GitIcon from '../assets/GitIcon';
import TwitterIcon from '../assets/TwitterIcon';
import MailIcon from '../assets/MailIcon';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <div>
        <a href="http://twitter.com/jeffathomas" rel="noopener noreferrer" target="_blank"><TwitterIcon /></a>
        <a href="http://github.com/jathom30" rel="noopener noreferrer" target="_blank"><GitIcon /></a>
        <a href="mailto:jathom30@gmail.com?Subject=Oh, hello"><MailIcon /></a>
      </div>
    </div>
  );
};

export default SocialMedia