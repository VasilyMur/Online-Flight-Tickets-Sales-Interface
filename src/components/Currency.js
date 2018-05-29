import React from 'react';


class Currency extends React.Component {



    changeCurrency = (e) => {
        e.preventDefault();
        this.props.currencyToggle(this.props.label);

        this.props.onClick(this.props.label)

    }

    render() {
        const { label } = this.props;
        const btn_class = this.props.isSelected ? "blueButton" : "whiteButton" ;

        return (
                <a href=""  className={btn_class} onClick={this.changeCurrency}>{label}</a>
        )
    }

}


export default Currency;