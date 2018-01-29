import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';


const EnhanceVisual = (props) => {
  let images = props.data.map((image) => {
    return <Image title={image.title}
                  return={image.return}
                  image={image.image}
                  alt={image.alt}
                  key={image.id} />
  });
  return (
    <div>
      {images}
    </div>
  );
}

EnhanceVisual.propTypes = {
  title: PropTypes.string,
  return: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  key: PropTypes.string,
};

export default EnhanceVisual;