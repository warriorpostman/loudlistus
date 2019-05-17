import React from 'react'
import styled from 'styled-components'
import VenueImage from './VenueImage';

const Card = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  float: left;
  width: 33%;
`;

const EventContent = styled.div`
  float: left;
  width: 62%;
`;

const EventPage = ({ id, venueName, bands, match }) => {
  return (
    <Card>
      <ImageWrapper>
        <VenueImage />
      </ImageWrapper>
      <EventContent>
        <h4>{venueName || 'venue'}</h4>
        { bands && bands.map(band => <div key={band}>{band}</div>) }
      </EventContent>
    </Card>
  );
};

export default EventPage;
