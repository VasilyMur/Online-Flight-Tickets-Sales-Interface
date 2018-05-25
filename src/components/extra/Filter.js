import React from 'react';

class Filter extends React.Component {
 
    stopsNumber = (e) => {
        // console.log(e.target.checked)

        if (e.target.checked && e.target.value) {

            if (e.target.value === "123") {
                console.log('Back to Original!!')
                this.props.uncheckBox();
            } else {
                console.log('1-Filter:', parseFloat(e.target.value))
                this.props.sortByStops(parseFloat(e.target.value));
            }
            
        } 
        else {
            console.log('UNCHECK!!')
            this.props.uncheckBox();
        }
            

    }


    render() {
        return (
            <div className="filter__container">
                <div className="filter__container--currency">
                    <p>Pick Your Currency</p>
                    <a href="">RUB</a>
                    <a href="">USD</a>
                    <a href="">EUR</a>
                </div>

                <div className="filter__container--stops">
                    <p>Number of Stops</p>
                    <div>
                        <input type="checkbox" value="1" onChange={this.stopsNumber} />
                        <label>1 Stop</label>
                    </div>
                    <div>
                        <input type="checkbox" value="2" onChange={this.stopsNumber} />
                        <label>2 Stops</label>                     
                    </div>
                    <div>
                        <input type="checkbox" value="3" onChange={this.stopsNumber} />
                        <label>3 Stops</label>                      
                    </div>
                    <div>
                        <input type="checkbox" value="123" onChange={this.stopsNumber}/>
                        <label>All</label>
                    </div>
                </div>
            </div>
        )
    }

}


export default Filter;