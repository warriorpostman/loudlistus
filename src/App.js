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
{"headliner":"Bad Books","support":["Brother Bird"],"eventLink":"/event/1849192-bad-books-san-diego/","utcDate":"2019-08-20T02:30:00Z","venueName":"Sodabar"},
{"headliner":"Dezorah","support":["Bad Kids","Free Paintings"],"eventLink":"/event/1873521-dezorah-san-diego/","utcDate":"2019-08-20T04:00:00Z","venueName":"Sodabar"},
{"headliner":"Gypsy Temple","support":["Super Buffet","Violet Dyes"],"eventLink":"/event/1878557-gypsy-temple-san-diego/","utcDate":"2019-08-21T04:00:00Z","venueName":"Sodabar"},
{"headliner":"Snail Mail","support":["Choir Boy"],"eventLink":"/event/1864765-snail-mail-san-diego/","utcDate":"2019-08-22T02:30:00Z","venueName":"Sodabar"},
{"headliner":"Jack Symes","support":["Swimming In Circles","Gregory Ackerman"],"eventLink":"/event/1878596-jack-symes-san-diego/","utcDate":"2019-08-22T03:30:00Z","venueName":"Sodabar"},
{"headliner":"Kyle Craft & Showboat Honey","support":[""],"eventLink":"/event/1863843-kyle-craft-showboat-honey-san-diego/","utcDate":"2019-08-23T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Beach Goons","support":["Junkie"],"eventLink":"/event/1870473-beach-goons-san-diego/","utcDate":"2019-08-24T02:30:00Z","venueName":"Sodabar"},
{"headliner":"Homeshake","support":["KeithCharles"],"eventLink":"/event/1875175-homeshake-san-diego/","utcDate":"2019-08-24T03:00:00Z","venueName":"Sodabar"},
{"headliner":"Molly Burch","support":["Jackie Cohen"],"eventLink":"/event/1864925-molly-burch-san-diego/","utcDate":"2019-08-24T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Shonen Knife","support":["Me Like Bees"],"eventLink":"/event/1873189-shonen-knife-san-diego/","utcDate":"2019-08-25T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Ian Olney","support":["ROSE"],"eventLink":"/event/1879935-ian-olney-san-diego/","utcDate":"2019-08-26T03:30:00Z","venueName":"Sodabar"},
{"headliner":"RacketGirl","support":["Laugh Tracks","Blush","Eric Schroeder"],"eventLink":"/event/1880054-racketgirl-san-diego/","utcDate":"2019-08-27T04:00:00Z","venueName":"Sodabar"},
{"headliner":"Mal Blum","support":["The Fresh Brunettes","Neutral Shirt"],"eventLink":"/event/1866881-mal-blum-san-diego/","utcDate":"2019-08-28T04:00:00Z","venueName":"Sodabar"},
{"headliner":"Hot Flash Heat Wave","support":["Jasper Bones","Ignant Benches"],"eventLink":"/event/1874475-hot-flash-heat-wave-san-diego/","utcDate":"2019-08-29T02:00:00Z","venueName":"Sodabar"},
{"headliner":"Free Throw","support":["Chris Farren","Youth Fountain","Macseal"],"eventLink":"/event/1868770-free-throw-la-jolla/","utcDate":"2019-08-29T02:30:00Z","venueName":"Sodabar"},
{"headliner":"Ms Nina","support":["Coquetas: Reggaeton Night DJs"],"eventLink":"/event/1861896-ms-nina-san-diego/","utcDate":"2019-08-29T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Ryley Walker + Wild Pink","support":["Grampadrew and the Gut Strings"],"eventLink":"/event/1867033-ryley-walker-wild-pink-san-diego/","utcDate":"2019-08-30T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Throwing Muses","support":["Fred Abong"],"eventLink":"/event/1867252-throwing-muses-san-diego/","utcDate":"2019-08-31T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Sitting on Stacy (album release)","support":["Band of Gringos","Lefties","Mughamera"],"eventLink":"/event/1873514-sitting-on-stacy-album-san-diego/","utcDate":"2019-09-01T02:00:00Z","venueName":"Sodabar"},
{"headliner":"High Tone Son Of A Bitch","support":[""],"eventLink":"/event/1882915-high-tone-son-bitch-san-diego/","utcDate":"2019-09-01T04:30:00Z","venueName":"Sodabar"},
{"headliner":"Hawthorne HeightsEmery","support":["Oh","Sleeper"],"eventLink":"/event/1860955-hawthorne-heights-emery-san-diego/","utcDate":"2019-08-19T02:00:00Z","venueName":"Casbah"},
{"headliner":"Kyle Kinane","support":[""],"eventLink":"/event/1868255-kyle-kinane-san-diego/","utcDate":"2019-08-19T03:30:00Z","venueName":"Casbah"},
{"headliner":"Flynt Flossy and Turquoise Jeep - The Lemons to Milkshakes Tour 2019","support":[""],"eventLink":"/event/1878184-flynt-flossy-turquoise-jeep-san-diego/","utcDate":"2019-08-19T03:30:00Z","venueName":"Casbah"},
{"headliner":"BorisUniform","support":[""],"eventLink":"/event/1861542-boris-uniform-san-diego/","utcDate":"2019-08-20T04:00:00Z","venueName":"Casbah"},
{"headliner":"Generationals","support":["Pure Bathing Culture"],"eventLink":"/event/1856539-generationals-san-diego/","utcDate":"2019-08-21T04:00:00Z","venueName":"Casbah"},
{"headliner":"Snail MailChoir Boy","support":[""],"eventLink":"/event/1856572-snail-mail-choir-boy-san-diego/","utcDate":"2019-08-22T03:00:00Z","venueName":"Casbah"},
{"headliner":"Blackfoot GypsiesJonny Wagon and the Tennessee Sons","support":[""],"eventLink":"/event/1877427-blackfoot-gypsies-jonny-wagon-san-diego/","utcDate":"2019-08-22T04:30:00Z","venueName":"Casbah"},
{"headliner":"Kyle Craft & Showboat Honey","support":[""],"eventLink":"/event/1863835-kyle-craft-showboat-honey-san-diego/","utcDate":"2019-08-23T04:30:00Z","venueName":"Casbah"},
{"headliner":"The SurrealisticsImagery MachineThe Night Howls","support":[""],"eventLink":"/event/1877111-surrealistics-imagery-san-diego/","utcDate":"2019-08-23T04:30:00Z","venueName":"Casbah"},
{"headliner":"Metalachi","support":[""],"eventLink":"/event/1873378-metalachi-solana-beach/","utcDate":"2019-08-24T04:00:00Z","venueName":"Casbah"},
{"headliner":"Emo Nite","support":[""],"eventLink":"/event/1878909-emo-nite-san-diego/","utcDate":"2019-08-16T22:52:08Z","venueName":"Casbah"},
{"headliner":"Molly Burch","support":["Jackie Cohen"],"eventLink":"/event/1864830-molly-burch-san-diego/","utcDate":"2019-08-24T04:30:00Z","venueName":"Casbah"},
{"headliner":"Tuxedo","support":[""],"eventLink":"/event/1865403-tuxedo-san-diego/","utcDate":"2019-08-25T03:00:00Z","venueName":"Casbah"},
{"headliner":"Shonen Knife","support":["Me Like Bees"],"eventLink":"/event/1873185-shonen-knife-san-diego/","utcDate":"2019-08-25T04:30:00Z","venueName":"Casbah"},
{"headliner":"See My Friends - A Fundraiser for Jeff Walls - The Magnificent, The Loons, El Vez and the Motherfuckers, Thee Allyrgic Reaction","support":[""],"eventLink":"/event/1876626-see-my-friends-fundraiser-san-diego/","utcDate":"2019-08-25T04:30:00Z","venueName":"Casbah"},
{"headliner":"Man Or Astro-Man?","support":["Human Beat"],"eventLink":"/event/1861843-man-or-astro-man-san-diego/","utcDate":"2019-08-26T04:30:00Z","venueName":"Casbah"},
{"headliner":"The White Buffalo","support":[""],"eventLink":"/event/1873395-white-buffalo-solana-beach/","utcDate":"2019-08-27T03:00:00Z","venueName":"Casbah"},
{"headliner":"The White Buffalo","support":[""],"eventLink":"/event/1873397-white-buffalo-solana-beach/","utcDate":"2019-08-28T03:00:00Z","venueName":"Casbah"},
{"headliner":"Howlin Rain","support":["Pacific Range","Drug Hunt"],"eventLink":"/event/1863667-howlin-rain-san-diego/","utcDate":"2019-08-28T04:00:00Z","venueName":"Casbah"},
{"headliner":"Joe Wood Change Today ‘83 to ‘93’Hard Fall HeartsThe Hellflowers","support":[""],"eventLink":"/event/1877009-joe-wood-change-today-83-san-diego/","utcDate":"2019-08-29T04:30:00Z","venueName":"Casbah"},
].map((val, index) => ({ ...val, id: index }));

export default App;
