import React from 'react';


import GitIcon from '../assets/GitIcon';
import TwitterIcon from '../assets/TwitterIcon';
import YoutubeIcon from '../assets/YoutubeIcon';

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h3>Find Me, Follow Me</h3>
      <div>
        <a href="http://twitter.com/jeffathomas"><TwitterIcon /></a>
        <a href="http://github.com/jathom30"><GitIcon /></a>
        <a href="http://youtube.com/stnapoleonband"><YoutubeIcon /></a>
      </div>
    </div>
  );
};

export default SocialMedia