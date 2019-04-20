import React, { Component } from 'react';

import EventCard from './components/EventCard';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          LOUD LIST
        </header>
        <main>
        <p>
          This is your one-stop shop for finding out who is playing live music in San Diego.
        </p>
        <h2>Shows</h2>
        { shows.map(show => 
        <EventCard 
          venueName={show.venueName}
          bands={show.bands}
        />)
        }
        { shows.map(show => 
        <EventCard 
          venueName={show.venueName}
          bands={show.bands}
        />)
        }
        </main>
      </div>
    );
  }
}

const shows = [{
    venueName:"Casbah",
    bands:['Heavy Celebration', 'Nice Guys', 'Bedroom Slippers']
  }, {
    venueName:"Sodabar", 
    bands:['Creepies', 'Jerks', 'Silent Rockers']
  }, {
    venueName:"TilTwo Club",
    bands:['Jimmy and the Jimmys', 'Quiet Muse', 'Silent Be-Bop']
  }, {
    venueName:"Sodabar", 
    bands:['Creepies', 'Jerks', 'Silent Rockers']
  }, {
    venueName:"Music Box",
    bands:['Mongos', 'Sleepies', 'Loud List Orchestra']
  }, {
    venueName:"Sodabar",
    bands:['Creepies', 'Jerks', 'Silent Rockers']
  }, {
    venueName:"Bancroft Bar",
    bands:['Sillies', 'Serious Folk', 'Dirty Clowns']
  }
];

export default App;
