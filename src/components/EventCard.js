import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
	float: left;
	min-height: 10rem;
  @media only screen and (min-width: 451px) {
    width: 33%;
    color: blue;
  }

  @media only screen and (max-width: 450px) {
    float: left;
    width: 50%;
    min-height: 10rem;
  }
`;

const EventCard = ({ venueName, bands }) => {
  return (
    <Card className="event-card">
      <h4>{venueName}</h4>
      { bands.map(band => <div>{band}</div>) }
    </Card>
  );
};

export default EventCard;
