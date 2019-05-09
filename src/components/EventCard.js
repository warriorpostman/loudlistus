import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Card = styled.div`
	float: left;
	min-height: 10rem;
  // padding: 1rem;
  @media only screen and (min-width: 451px) {
    width: 33%;
    color: blue;
  }

  @media only screen and (max-width: 450px) {
    float: left;
    width: 50%;
    min-height: 10rem;
  }

  &:hover {
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px gray;
  }
`;

const EventCard = ({ venueName, bands }) => {
// TODO: MAKE THIS LINK WORK
  return (
    <Link to="/event/event-id">
      <Card className="event-card">
        <h4>{venueName}</h4>
        { bands.map(band => <div>{band}</div>) }
      </Card>
    </Link>
  );
};

export default EventCard;
