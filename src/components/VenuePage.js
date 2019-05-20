import React from 'react';
import styled from 'styled-components';
import DatePickerLink from './DatePickerLink';
import moment from 'moment';

const ShowContainer = styled.div`
  margin-top: 1rem;

  & > :hover {
    border: 1px solid black;
  }

  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const VenuePage = ({ venueName }) => {
  return (
    <div>
      VENUE PAGE {venueName}
      {shows
      .filter(s => s.venueName === venueName)
      .map(show => 
        <ShowContainer>
          <DatePickerLink date={moment()} />
          <div>
            {show.bands.map(band => <span>{band} </span>)}
          </div>
        </ShowContainer>
      )}
    </div>
  );
};

const shows = [{
    id: 1,
    venueName:"Casbah",
    bands:['Heavy Celebration', 'Nice Guys', 'Bedroom Slippers']
  }, {
    id: 2,
    venueName:"Sodabar", 
    bands:['Creepies', 'Jerks', 'Silent Rockers']
  }, {
    id: 3,
    venueName:"TilTwo Club",
    bands:['Jimmy and the Jimmys', 'Quiet Muse', 'Silent Be-Bop']
  }, {
    id: 4,
    venueName:"Sodabar", 
    bands:['Creepies', 'Jerks', 'Silent Rockers']
  }, {
    id: 5,
    venueName:"Music Box",
    bands:['Mongos', 'Sleepies', 'Loud List Orchestra']
  }, {
    id: 6,
    venueName:"Black Cat Bar",
    bands:['Catsy Cats', 'Dogsy Dogs', 'Loud Rockers']
  }, {
    id: 7,
    venueName:"Bancroft Bar",
    bands:['Sillies', 'Serious Folk', 'Dirty Clowns']
  }, {
    id: 8,
    venueName:"Funny Farm",
    bands:['Sillies', 'Morose Folk', 'Crazy Clowns']
  }, {
    id: 9,
    venueName:"Non-alcoholic Bar",
    bands:['Teetotalers', 'Serious Folk', 'Sober Clowns']
  }, {
    id: 10,
    venueName:"Alcohol Bar",
    bands:['Libertines', 'Funny People', 'Drunken Clowns']
  }
];

export default VenuePage;
