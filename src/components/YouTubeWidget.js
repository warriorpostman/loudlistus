import React from 'react';

const YouTubeWidget = ({ url }) => {
  return (
    <iframe 
      width="360" height="215" 
      title="band video"
      src={url} 
      frameBorder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen>
    </iframe>
  );
}

export default YouTubeWidget;
