import React, { Component } from 'react';
import { BrowserRouter , Route} from 'react-router-dom';

import EventCard from './components/EventCard';

import './App.css';
import Logo from './images/loud-list-logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img 
            src={Logo}
            alt="Logo for Loud List"/>
        <p>
          This is your one-stop shop for finding out who is playing live music in San Diego.
        </p>
        </header>
        
        <main>
          <BrowserRouter>
            <Route 
              path="/event/:id"
              render={() => 
              <EventCard 
                venueName="THE VENUE DETAIL"
                bands={['band1', 'band2', 'band3']}
              />
              }
            />
            <Route 
              path="/" 
              exact={true}
              render={() => <React.Fragment>
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
            </React.Fragment>
            }/>
      </BrowserRouter>
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
