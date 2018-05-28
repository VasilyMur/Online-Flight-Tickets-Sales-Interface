import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');


class Ticket extends React.Component {

    
     render() {
        
        
        const flight = this.props.details;
        const flightDepRaw = flight.departure_date.replace(/\./g, '/');
        const flightArrRaw = flight.arrival_date.replace(/\./g, '/');

        const flightDep= `${moment(Date.parse(flightDepRaw)).format("Do MMM YYYY, dd")}`;
        const flightArr= `${moment(Date.parse(flightArrRaw)).format("Do MMM YYYY, dd")}`;
        const price = flight.price / this.props.curState;
        const usdPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);
        const rubPrice = `${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 5 }).format(price)} ₽`;
        return (
            
            <div className="ticket__container">
                <div className="ticket__container--price">
                    <div className="logo">
                        <img src='/klm.png' alt=""/>
                    </div>
                    <div className="price">
                        <a href="">
                            <span>Buy</span>
                            <span>{this.props.curState !== 1 ? usdPrice : rubPrice }</span>
                        </a>
                    </div>
                </div>
                <div className="ticket__container--details">

                    <div className="detail-item details__depart">
                        <div className="details__depart--time time">{flight.departure_time}</div>
                        <div className="details__depart--city city">{flight.origin}, {flight.origin_name}</div>
                        <div className="details__depart--date date">{flightDep}</div>
                    </div>

                    <div className="detail-item details__direction">
                        <div className="details__direction--stops">
                            <div className="stops">{flight.stops} stops</div>
                            <div><img alt="plane svg" src="/black-plane.svg"/></div> 
                        </div>
                    </div>
  
                    <div className="detail-item details__arrive">
                        <div className="details__arrive--time time">{flight.arrival_time}</div>
                        <div className="details__arrive--city city">{flight.destination}, {flight.destination_name}</div>
                        <div className="details__arrive--date date">{flightArr}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket;