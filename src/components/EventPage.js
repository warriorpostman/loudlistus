import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ShowBandsList from './ShowBandsList';
import VenueImage from './VenueImage';
import YouTubeWidget from './YouTubeWidget';

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

const YouTubeBar = styled.div`
  display: block;
  width: 100%;
`;

const EventPage = ({ id, venueName, headliner, bands, eventLink, match }) => {
  return (
    <Page>
      <ImageWrapper>
        <VenueImage />
      </ImageWrapper>
        <EventContent>
          <div>
            <Link to={"/venue/" + venueName}>
              <h2>@{venueName || 'venue'}
              </h2>
            </Link>
            <div>{headliner}</div>
            <ShowBandsList 
              headliner={headliner} 
              bands={bands} 
            />
            <a href={`https://sodabarmusic.com/${eventLink}`}>
              ...more details [TODO REmove hard-coded sodabar]
            </a>
          </div>
          <YouTubeBar>
            <YouTubeWidget 
              url="https://www.youtube.com/embed/c4eyIoU6UoA" 
            />
         </YouTubeBar>
      </EventContent>
    </Page>
  );
};

export default EventPage;
