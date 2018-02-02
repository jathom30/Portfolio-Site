import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Spacer extends Component {
  render() {
    const largeBackground = {
      background: 'url(' + this.props.backgroundImage + ')',
      backgroundOrigin: 'center',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    };
    return (
      <div className='spacer' style={largeBackground}></div>
    );
  }
}

Spacer.propTypes = {
  backgroundImage: PropTypes.string,
};