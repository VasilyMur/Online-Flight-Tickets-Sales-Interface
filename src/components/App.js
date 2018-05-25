import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Ticket from './Ticket';
import Filter from './Filter';

import axios from 'axios';


import flightData from '../flights';
//import uuidv1 from 'uuid/v1';



class App extends React.Component {

  state ={
    flights: [],
    currency: 1
  }


  componentDidMount() {
    //const flights = [...this.state.flights];

   const allFlights = flightData.tickets.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    }).map(flight => {
      //const { arrival_date, arrival_time, carrier, departure_date, departure_time, destination, destination_name, origin, origin_name, price, stops  } = flight;
      //const flightDetails = {arrival_date, arrival_time, carrier, departure_date, departure_time, destination, destination_name, origin, origin_name, price, stops};
      return {
        arrival_date: flight.arrival_date,
        arrival_time: flight.arrival_time, 
        carrier: flight.carrier, 
        departure_date: flight.departure_date,
        departure_time: flight.departure_time, 
        destination: flight.destination, 
        destination_name: flight.destination_name, 
        origin: flight.origin,
        origin_name: flight.origin_name, 
        price: flight.price, 
        stops: flight.stops,
      }
      //return flights[`flight-${uuidv1()}`] = flightDetails;
    });

    this.setState({ flights: allFlights })
  }

  original = () => {
    console.log('hello0000')
    const allFlights = flightData.tickets.sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    }).map(flight => {

      return {
        arrival_date: flight.arrival_date,
        arrival_time: flight.arrival_time, 
        carrier: flight.carrier, 
        departure_date: flight.departure_date,
        departure_time: flight.departure_time, 
        destination: flight.destination, 
        destination_name: flight.destination_name, 
        origin: flight.origin,
        origin_name: flight.origin_name, 
        price: flight.price / this.state.currency, 
        stops: flight.stops,
      }

    });

    this.setState({ flights: allFlights })
  }

currencyToggle = async (type) => {

  const rates = await axios.get('http://data.fixer.io/api/latest?access_key=0d4ec61383a12922d78ca24bb4e74bb7&symbols=USD,RUB&format=1');
  const eur = rates.data.rates.RUB;
  const usd = rates.data.rates.RUB / rates.data.rates.USD;
  this.setState({ currency: type === "USD" ? usd : 1  });
  this.original()


}


  trackSet = async (set) => {
    try {
      await this.original();

      const flights = [...this.state.flights]
  
      // Function 1 - One Stop Checked
      const filterFlights = (stops) => {
  
        const originalList = flights.sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        }).map(flight => {
          return flight
        }).filter(res => {
          return res.stops === stops;
        })
        this.setState({ flights: originalList })
      }
  
      // Function 2 - Two Stops Checked
      const filterFlightsTwo = (stopA, stopB ) => {
  
        const originalList = flights.sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        }).map(flight => {
          return flight
        }).filter(res => {
          return res.stops === stopA || res.stops === stopB;
        })
        this.setState({ flights: originalList })
      }

      // Function 3 - All Three Checked or All Three Unchecked
      const filterFlightsThree = (stopA, stopB, stopC) => {
    
        const originalList = flights.sort((a, b) => {
          return a.price > b.price ? 1 : -1;
        }).map(flight => {
          return flight
        }).filter(res => {
          if (!stopA && !stopB && !stopC) {
            return res;
          } 
          return res.stops === stopA || res.stops === stopB || res.stops === stopC;
        })
        this.setState({ flights: originalList })
      }
      
  
      if (set.has('One')) {
        filterFlights(1);
      } 
  
      if (set.has('Two')) {
        filterFlights(2);
      } 
  
      if (set.has('Three')) {
        filterFlights(3);
      } 
  
      
      if (set.has('One') && set.has('Two')) {
        filterFlightsTwo(1, 2)
      }
  
      if (set.has('One') && set.has('Three')) {
        filterFlightsTwo(1, 3)
      }
  
      if (set.has('Two') && set.has('Three')) {
        filterFlightsTwo(2, 3)
      }

      //
      if(set.has('One') && set.has('Two') && set.has('Three')) {
        filterFlightsThree(1, 2, 3);
      }

      if(set.size === 0) {
        console.log('set size: 0')
        filterFlightsThree(null, null, null);
      }
  
    } catch(e) {
      console.log(e)
    }
  }



  render() {
   


    return (
      <div className="App">

        <Header />

          <div className="content">
            <div className="inner">
              <div className="tickets">
                <div className="tickets__filters">
                  <Filter 
                  trackSet={this.trackSet}
                  currencyToggle={this.currencyToggle}
                  />
                </div>
                <div className="tickets__options">
                  {Object.keys(this.state.flights).map(res => {
                    return <Ticket
                      key={res}
                      details={this.state.flights[`${res}`]}
                      curState={this.state.currency}
                    />
                  })}
                  
                </div>
              </div>
            </div>
          </div>

        <Footer />

      </div>
    );
  }
}

export default App;