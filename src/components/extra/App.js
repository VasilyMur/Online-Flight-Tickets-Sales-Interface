import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Ticket from './Ticket';
import Filter from './Filter';


import flightData from '../flights';
//import uuidv1 from 'uuid/v1';


class App extends React.Component {

  state ={
    flights: []
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
 

  uncheckBox = () => {

    //const flights = [];

    const originalList = flightData.tickets.sort((a, b) => {
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


    this.setState({ flights: originalList })

        // flightData.tickets.sort((a, b) => {
    //   return a.price > b.price ? 1 : -1;
    // }).map(data => {
    //   const { arrival_date, arrival_time, carrier, departure_date, departure_time, destination, destination_name, origin, origin_name, price, stops  } = data;
    //   const flightDetails = {arrival_date, arrival_time, carrier, departure_date, departure_time, destination, destination_name, origin, origin_name, price, stops};
    //   return flights[`flight-${uuidv1()}`] = flightDetails;
    // });

  }

  sortByStops = (stops) => {
    
    const flights = []
    console.log(flights)

    // const filterFlights = flights.filter(flight => {
    //   return flight.stops === stops;
    // })
    const originalList = flightData.tickets.sort((a, b) => {
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
        price: flight.price, 
        stops: flight.stops,
      }
    }).filter(res => {
      return res.stops === stops;
    })

    this.setState({ flights: originalList })
 
        // Object.keys(flights).filter(res => {
    //   console.log(flights[res])
    // })

    // const filter = Object.values(flights).filter(res => {
  //     return res.stops === stops;
  //   })

  }



  render() {
   


    return (
      <div className="App">

        <Header />

          <div className="content">
            <div className="inner">
              <div className="tickets">
                <div className="tickets__filters">
                  <Filter sortByStops={this.sortByStops} uncheckBox={this.uncheckBox}/>
                </div>
                <div className="tickets__options">
                  {Object.keys(this.state.flights).map(res => {
                    return <Ticket
                      key={res}
                      details={this.state.flights[`${res}`]}
                    
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