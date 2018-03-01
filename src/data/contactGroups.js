import React from 'react';

import PhoneIcon from '../assets/PhoneIcon';
import MailIcon from '../assets/MailIcon';
import TwitterIcon from '../assets/TwitterIcon';
import GitIcon from '../assets/GitIcon';

export const ContactData = [
  {
    icon: <MailIcon />,
    text: 'jathom30@gmail.com',
    href: 'mailto:jathom30@gmail.com?Subject=Oh, hello',
    rel: '',
    target: '',
  },
  {
    icon: <PhoneIcon />,
    text: '502-439-1974',
    href: 'tel:+1-502-439-1974',
    rel: '',
    target: '',
  },
  {
    icon: <TwitterIcon />,
    text: '@jeffathomas',
    href: 'http://twitter.com/jeffathomas',
    rel: 'noopener noreferrer',
    target: '_blank',
  },
  {
    icon: <GitIcon />,
    text: '/jathom30',
    href: 'http://github.com/jathom30',
    rel: 'noopener noreferrer',
    target: '_blank',
  }
]

