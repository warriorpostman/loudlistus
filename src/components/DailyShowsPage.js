import React from 'react';
import moment from 'moment';

import EventCard from './EventCard';

const DailyShowsPage = ({ date, shows }) => {
  const currentDay = moment(date);
  // console.log('HEY ', currentDay.format());
  const currentDayShows = shows.filter(s => {
    const utcDate = moment.utc(s.utcDate);
    const showDate = utcDate.local();
    console.log({ utcDate, showDate });
    return showDate.isSame(currentDay, 'year') &&
      showDate.isSame(currentDay, 'month') &&
      showDate.isSame(currentDay, 'date');
    // return true;
  });

  return (
    <div>
      <h2>Shows on {date}</h2>
      { currentDayShows.map(show => 
      <EventCard 
        key={"show-card-" + show.id.toString()}
        id={show.id}
        venueName={show.venueName}
        headliner={show.headliner}
        bands={show.support}
      />)
      }
    </div>
  );
};

export default DailyShowsPage;
