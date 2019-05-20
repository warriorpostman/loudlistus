import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ShowBandsList from './ShowBandsList';
import VenueImage from './VenueImage';

const Page = styled.div`
  margin-top: 4rem;
  width: 100%;
`;

const ImageWrapper = styled.div`
  float: left;
  width: 33%;
`;

const EventContent = styled.div`
  float: left;
  width: 62%;

  & > h2 {
    float: right;
  }
`;

const EventPage = ({ id, venueName, bands, match }) => {
  return (
    <Page>
      <ImageWrapper>
        <VenueImage />
      </ImageWrapper>
      <EventContent>
        <Link to={"/venue/" + venueName}>
          <h2>@{venueName || 'venue'}
          </h2>
        </Link>
        <ShowBandsList bands={bands} />
      </EventContent>
    </Page>
  );
};

export default EventPage;
