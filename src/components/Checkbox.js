import React from 'react';

class Checkbox extends React.Component {

    state = {
        isChecked: false,
      }

    toggleCheckboxChange = () => {
        
        const isChecked = this.state.isChecked;
        this.setState({ isChecked: !isChecked})

        this.props.handleCheckboxChange(this.props.label)
    }


    render() {
        const { isChecked } = this.state;
        const { label } = this.props;

        return (
                <label>
                    <input type="checkbox" checked={isChecked} value={label} onChange={this.toggleCheckboxChange}/>
                    {label}
                </label>
        )
    }

}


export default Checkbox;