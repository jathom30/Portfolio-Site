import React from 'react';

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

export default EnhanceVisual;