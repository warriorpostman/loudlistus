import React from 'react';
import './EventCard.css'

const EventCard = ({ venueName, bands }) => {
  return (
    <div className="event-card">
      <h4>{venueName}</h4>
      { bands.map(band => <div>{band}</div>) }
    </div>
  );
};

export default EventCard;
