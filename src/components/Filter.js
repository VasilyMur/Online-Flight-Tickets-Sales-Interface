import React from 'react';
import Checkbox from './Checkbox';
import Currency from './Currency';



const stops = [
    'One',
    'Two',
    'Three'
]

const currency = [
    'RUB',
    'USD'
]

class Filter extends React.Component {

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }

      toggleCheckbox = (label) => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
        this.props.trackSet(this.selectedCheckboxes)
      }



    render() {


        return (
            <div className="filter__container">
                <h2>Choose Your Currency</h2>
                <div className="filter__container--currency">

                    { currency.map(cur => {
                        return (
                            <Currency
                                currencyToggle={this.props.currencyToggle}
                                label={cur}
                                key={cur}
                            />
                        )
                    }) }

                </div>

                <h2>Number of Stops</h2>
                <div className="filter__container--stops">

                {stops.map(stop => {
                    return (
                        <Checkbox
                            label={stop}
                            handleCheckboxChange={this.toggleCheckbox}
                            key={stop}
                        />
                    )        
                })}
                </div>
            </div>
        )
    }

}


export default Filter;