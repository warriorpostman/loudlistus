import React from 'react';
import placeholder from '../images/pearl-street.jpg';

const VenueImage = ({ src }) => {
  return src ? 
    <img src={src} /> : 
    <img src={placeholder} 
      alt="PLACEHOLDER" 
      style={{ width: '100%' }}
    />
};
export default VenueImage;
