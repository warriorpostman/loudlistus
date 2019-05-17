import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import EventCard from './components/EventCard';
import EventPage from './components/EventPage';

import './App.css';
import Logo from './images/loud-list-logo.png';
import DatePickerToolbar from './components/DatePickerToolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"> 
            <img 
              src={Logo}
              alt="Logo for Loud List"/>
          </a>
        <p>
          This is your one-stop shop for finding out who is playing live music in San Diego.
        </p>
        </header>
        
        <main>
          <DatePickerToolbar />
          <BrowserRouter>
            <Route 
              path="/event/:id"
              render={({ match }) => {
              console.log({ match });
              const data = shows.find(s => s.id.toString() === match.params.id);
              console.log(data);
              return (
              <EventPage 
                match={match}
                venueName={data.venueName}
                bands={data.bands}
                id={data.id}
              />
              );
              }}
            />
            <Route 
              path="/" 
              exact={true}
              render={() => <React.Fragment>
              <h2>Shows</h2>
              { shows.map(show => 
              <EventCard 
                id={show.id}
                venueName={show.venueName}
                bands={show.bands}
              />)
              }
            </React.Fragment>
            }/>
      </BrowserRouter>
        </main>
      </div>
    );
  }
}

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
    venueName:"Sodabar",
    bands:['Creepies', 'Jerks', 'Silent Rockers']
  }, {
    id: 7,
    venueName:"Bancroft Bar",
    bands:['Sillies', 'Serious Folk', 'Dirty Clowns']
  }
];

export default App;
