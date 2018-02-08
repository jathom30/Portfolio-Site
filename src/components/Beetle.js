import React, { Component } from 'react';

import BeetlePieces from '../assets/BeetlePieces';

export default class Beetle extends Component {
  render() {
    return (
      <div className="beetle-main">
        <BeetlePieces />
      </div>
    );
  }
}