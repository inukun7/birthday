import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changedate';
import LargeText from './lardeText';

import moment from 'moment';


export default class App extends Component {

  constructor(props) {
    super (props)

    this.state = {
      active: false,
      startDate: moment(),
      timeRemaining: moment.duration(),
      age: 0
    }
  }

  handleGenerate = () => {
    this.setState({ active: true });
    
    const bday = this.state.startDate;
    const nextBday = bday;

    const calculateRemaining = function() {
      return moment.duration(nextBday.diff(moment()));
    }

    this.timer = setInterval(function(){
      this.setState({ timeRemaining: calculateRemaining()});
      if (moment.duration(this.state.timeRemaining).asSeconds() <= 0 ) {
        clearInterval(this.timer);
      }
      }.bind(this), 1000);
  }

  handledatechange = (date) => {
    this.setState({startDate: date})
  }

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock timeleft = {this.state.timeRemaining}/>,
        ChangeDate('Change Date', () => this.setState({ active: false })),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining untill your 21st birthday</label>
      ]
    } else {
        return[
          <Picker selected={this.state.startDate} thedate = {this.handledatechange}/>,
          Button('Generate Countdown', this.handleGenerate)
        ]
      }
  }.bind(this);

  render() {

    return (
      <div className="grid">
        <h1 className="grid__title">Birthday Countdown</h1>

        <div className="grid__skew-dark-one-box"></div>
        <div className="grid__skew-dark-two"></div>
        <div className="grid__skew-dark-three"></div>

        <div className="grid__skew-light-one"></div>
        <div className="grid__skew-light-two"></div>
        <div className="grid__skew-light-three"></div>

        
        { this.renderItems() }

      </div>
    );
  }
}
