import React from 'react';

class Ticket extends React.Component {


     render() {
        const flight = this.props.details;
        const usdPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(flight.price);
        const rubPrice = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(flight.price);
        console.log(usdPrice)
        return (
            <div className="ticket__container">
                <div className="ticket__container--price">
                    <div className="logo">
                        <span>KLM</span>
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
                        <div className="details__depart--date date">{flight.departure_date}</div>
                    </div>
                    <div className="detail-item details__direction">
                        <div className="details__direction--stops stops">{flight.stops} stops</div>
                        <div className="details__direction--line"></div>
                    </div>
                    <div className="detail-item details__arrive">
                        <div className="details__arrive--time time">{flight.arrival_time}</div>
                        <div className="details__arrive--city city">{flight.destination}, {flight.destination_name}</div>
                        <div className="details__arrive--date date">{flight.arrival_date}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket;