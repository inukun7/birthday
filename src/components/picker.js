import React, { Component } from 'react';

import DatePicker from 'react-datepicker';

import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Picker extends Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
     
    handleChange(date) {
        this.props.thedate(date)
    }

    render() {
        return(
            <div className="picker"> 
                <DatePicker
                    onChange={this.handleChange}
                    selected={this.props.selected}
                />
            </div>
        )
    }
}

export default Picker;