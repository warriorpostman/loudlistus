import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import EventCard from './components/EventCard';
import EventPage from './components/EventPage';
import VenuePage from './components/VenuePage';
import BandPage from './components/BandPage';
import DailyShowsPage from './components/DailyShowsPage';

import events from './events.js';
import './App.css';
import Logo from './images/loud-list-logo.png';
import DatePickerToolbar from './components/DatePickerToolbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: undefined
    };
  }

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
          Who is playing live music in San Diego?
        </p>
        </header>
        
        <main>
          <BrowserRouter>
            <DatePickerToolbar 
              onDateSelected={(selectedDate) => 
              this.setState({ currentDate: selectedDate })
              }
            />
            <Route 
              path="/band/:bandName"
              render={({ match }) =>
              <BandPage band={{ name: match.params.bandName }} />}
              />
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
                headliner={data.headliner}
                bands={data.support}
                eventLink={data.eventLink}
                id={data.id}
              />
              );
              }}
            />
            <Route 
              path="/venue/:name"
              render={({ match }) => 
              <VenuePage 
                venueName={match.params.name}
                shows={shows}
              />
              }
            />
            <Route 
              path="/shows/:date"
              render={({ match }) => 
              <DailyShowsPage 
                date={match.params.date} 
                shows={shows}
              />
              }
            />
            <Route 
              path="/" 
              exact={true}
              render={() => 
                  <React.Fragment>
              <h2>Shows</h2>
              { shows.map(show => 
              <EventCard 
                id={show.id}
                venueName={show.venueName}
                bands={show.support}
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

let shows = [{
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

shows = events.map((val, index) => ({ ...val, id: index }));

export default App;
