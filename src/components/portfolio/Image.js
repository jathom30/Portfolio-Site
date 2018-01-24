import React from 'react';
import { NavLink } from 'react-router-dom';

const Image = (props) => (
  <div className="portfolio-images enhance">
      <NavLink to={ props.return }>
        <img src={ props.image } alt={ props.alt } className="full-image" />
      </NavLink>
      <h3>{ props.title }</h3>
    </div>
);

export default Image;