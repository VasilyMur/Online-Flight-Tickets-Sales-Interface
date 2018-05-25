import React from 'react';
import Checkbox from './Checkbox';
import Currency from './Currency';


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
                <div className="filter__container--currency">
                    <p>Choose Your Currency</p>
                    <Currency
                        currencyToggle={this.props.currencyToggle}
                        label={"RUB"}
                        key={"RUB"}
                    />
                    <Currency
                        currencyToggle={this.props.currencyToggle}
                        label={"USD"}
                        key={"USD"}
                    />
                </div>
                <div className="filter__container--stops">
                    <p>Number of Stops</p>
                    <Checkbox
                        label={"One"}
                        handleCheckboxChange={this.toggleCheckbox}
                        key={"One"}
                    />
                    <Checkbox
                        label={"Two"}
                        handleCheckboxChange={this.toggleCheckbox}
                        key={"Two"}
                    />
                    <Checkbox
                        label={"Three"}
                        handleCheckboxChange={this.toggleCheckbox}
                        key={"Three"}
                    />
                </div>
            </div>
        )
    }

}


export default Filter;