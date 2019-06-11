import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Card = styled.div`
	float: left;
	min-height: 10rem;
  padding: .5rem;
  @media only screen and (min-width: 451px) {
    width: 30%;
    color: blue;
  }

  // LOOK AT THAT styled-components media query library for this
  @media only screen and (max-width: 450px) {
    float: left;
    width: 50%;
    min-height: 10rem;
  }

  &:hover {
    border-radius: 2px;
    box-shadow: -1px 1px 1px 1px gray;
  }

  text-align: left
`;

const Headliner = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
`;

const EventCard = ({ id, venueName, headliner, bands, match }) => {
// TODO: MAKE THIS LINK WORK
  return (
    <Link to={`/event/${id}`}>
      <Card className="event-card">
        <Headliner>{headliner}</Headliner>
        { bands.map(band => <div key={"band-" + band}>{band}</div>) }
        <h4>@{venueName}</h4>
      </Card>
    </Link>
  );
};

export default EventCard;
