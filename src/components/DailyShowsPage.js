import React from 'react';

import EventCard from './EventCard';

const DailyShowsPage = ({ date, shows }) => {
  const randIdx = Math.round(Math.random() * 10);
  const before =  shows.slice(0, randIdx);
  const after = shows.slice(randIdx, shows.length);
  const displayShows = after.concat(before);
  console.log('randomizing', displayShows);

  return (
    <React.Fragment>
      <h2>Shows on {date}</h2>
      { displayShows.map(show => 
      <EventCard 
        id={show.id}
        venueName={show.venueName}
        bands={show.bands}
      />)
      }
    </React.Fragment>
  );
};

export default DailyShowsPage;
