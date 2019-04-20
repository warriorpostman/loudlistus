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
        <p>
          HI This is LOUDLISTUS its awesome yo
        </p>
        <h2>Shows</h2>
        <EventCard 
          venueName="Casbah" 
          bands={['Heavy Celebration', 'Nice Guys', 'Bedroom Slippers']}
        />
        <EventCard 
          venueName="Sodabar" 
          bands={['Creepies', 'Jerks', 'Silent Rockers']}
        />
        <EventCard 
          venueName="TilTwo Club" 
          bands={['Jimmy and the Jimmys', 'Quiet Muse', 'Silent Be-Bop']}
        />
        <EventCard 
          venueName="Sodabar" 
          bands={['Creepies', 'Jerks', 'Silent Rockers']}
        />
        <EventCard 
          venueName="Music Box" 
          bands={['Mongos', 'Sleepies', 'Loud List Orchestra']}
        />
        <EventCard 
          venueName="Sodabar" 
          bands={['Creepies', 'Jerks', 'Silent Rockers']}
        />
        <div>


        </div>
      </div>
    );
  }
}

export default App;
