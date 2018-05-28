import React from 'react';


class Currency extends React.Component {

 

    changeCurrency = (e) => {
        e.preventDefault();
        this.props.currencyToggle(this.props.label);
    }

    render() {
        const { label } = this.props;

        return (
                <a href="" onClick={this.changeCurrency}>{label}</a>
        )
    }

}


export default Currency;