import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import EventCard from './components/EventCard';
import EventPage from './components/EventPage';
import VenuePage from './components/VenuePage';
import BandPage from './components/BandPage';
import DailyShowsPage from './components/DailyShowsPage';

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

shows = [ 
  { headliner: 'Sweetie Darling',
    support: [ 'The Fresh Brunettes', 'Chutes', 'The Fazes' ],
    eventLink: '/event/1864337-sweetie-darling-san-diego/',
    utcDate: '2019-06-05T04:00:00Z',
    venueName: 'Sodabar',
    id: 0 },
  { headliner: 'Spiral Stairs',
    support: [ 'The Rightovers' ],
    eventLink: '/event/1819892-spiral-stairs-san-diego/',
    utcDate: '2019-06-06T04:30:00Z',
    venueName: 'Sodabar',
    id: 1 },
  { headliner: 'Pleasure Fix',
    support: [ 'State to State', 'Satellite Citi' ],
    eventLink: '/event/1853948-pleasure-fix-san-diego/',
    utcDate: '2019-06-07T04:00:00Z',
    venueName: 'Sodabar',
    id: 2 },
  { headliner: 'TTNG',
    support: [ 'The Kraken Quartet', 'Standards' ],
    eventLink: '/event/1837768-ttng-san-diego/',
    utcDate: '2019-06-08T02:00:00Z',
    venueName: 'Sodabar',
    id: 3 },
  { headliner: 'Mac Sabbath',
    support: [ 'Playboy Manbaby', 'Fiends' ],
    eventLink: '/event/1839612-mac-sabbath-san-diego/',
    utcDate: '2019-06-08T04:30:00Z',
    venueName: 'Sodabar',
    id: 4 },
  { headliner: 'together PANGEA + Vundabar',
    support: [ 'Dehd' ],
    eventLink: '/event/1848043-together-pangea-vundabar-san-diego/',
    utcDate: '2019-06-09T02:00:00Z',
    venueName: 'Sodabar',
    id: 5 },
  { headliner: 'Death Cab For Karaoke',
    support: [ '' ],
    eventLink: '/event/1859314-death-cab-for-karaoke-san-diego/',
    utcDate: '2019-06-09T04:00:00Z',
    venueName: 'Sodabar',
    id: 6 },
  { headliner: 'CJ Ramone',
    support: [ 'Mean Jeans', 'Midnight Track' ],
    eventLink: '/event/1838166-cj-ramone-san-diego/',
    utcDate: '2019-06-10T04:00:00Z',
    venueName: 'Sodabar',
    id: 7 },
  { headliner: 'SOURCE',
    support: [ 'Lightstory', 'ElectroMagnetic' ],
    eventLink: '/event/1857144-source-san-diego/',
    utcDate: '2019-06-11T04:00:00Z',
    venueName: 'Sodabar',
    id: 8 },
  { headliner: 'Sadistik',
    support: [ 'Trizz', 'Rafael Vigilantics', 'Preacher Vs. Choir' ],
    eventLink: '/event/1848344-sadistik-san-diego/',
    utcDate: '2019-06-12T04:00:00Z',
    venueName: 'Sodabar',
    id: 9 },
  { headliner: 'RVG',
    support: [ '' ],
    eventLink: '/event/1850332-rvg-san-diego/',
    utcDate: '2019-06-14T04:30:00Z',
    venueName: 'Sodabar',
    id: 10 },
  { headliner: 'No Vacation',
    support: [ 'Okey Dokey' ],
    eventLink: '/event/1838511-no-vacation-san-diego/',
    utcDate: '2019-06-15T02:30:00Z',
    venueName: 'Sodabar',
    id: 11 },
  { headliner: 'Pile',
    support: [ 'State Champion', 'Miss New Buddha' ],
    eventLink: '/event/1829913-pile-san-diego/',
    utcDate: '2019-06-15T04:30:00Z',
    venueName: 'Sodabar',
    id: 12 },
  { headliner: 'VINCENT',
    support: [ 'Jaron' ],
    eventLink: '/event/1825478-vincent-san-diego/',
    utcDate: '2019-06-16T04:30:00Z',
    venueName: 'Sodabar',
    id: 13 },
  { headliner: 'The Holdup',
    support: [ 'Unsteady' ],
    eventLink: '/event/1839900-holdup-san-diego/',
    utcDate: '2019-06-17T04:00:00Z',
    venueName: 'Sodabar',
    id: 14 },
  { headliner: 'Dark Alley Dogs',
    support: [ 'The Thieves About' ],
    eventLink: '/event/1855001-dark-alley-dogs-san-diego/',
    utcDate: '2019-06-18T04:00:00Z',
    venueName: 'Sodabar',
    id: 15 },
  { headliner: 'Be Mine Phantom Valentine',
    support: [ 'Magical Animals', 'Grand Curator' ],
    eventLink: '/event/1863699-be-mine-phantom-valentine-san-diego/',
    utcDate: '2019-06-19T04:00:00Z',
    venueName: 'Sodabar',
    id: 16 },
  { headliner: 'Slingshot Dakota',
    support: [ 'Hey', 'Chels', 'Neutral Shirt' ],
    eventLink: '/event/1846439-slingshot-dakota-san-diego/',
    utcDate: '2019-06-20T04:00:00Z',
    venueName: 'Sodabar',
    id: 17 },
  { headliner: 'Katie Toupin',
    support: [ 'Havelin' ],
    eventLink: '/event/1844823-katie-toupin-san-diego/',
    utcDate: '2019-06-21T04:30:00Z',
    venueName: 'Sodabar',
    id: 18 },
  { headliner: 'Matthew Logan Vasquez (Delta Spirit)',
    support: [ 'Walker Lukens', 'PR Newman' ],
    eventLink: '/event/1812162-matthew-logan-vasquez-delta-san-diego/',
    utcDate: '2019-06-22T04:30:00Z',
    venueName: 'Sodabar',
    id: 19 } 
];

export default App;
