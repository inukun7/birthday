import React, { Component } from 'react'

class Clock extends Component {
    render() {
        return (
            <div className="clock">
                <div className="clock__days">
                    <label ClassName="clock__title">DAYS</label>
                    <label ClassName="clock__amount">20</label>
                </div>
                <div className="clock__hours">
                    <label ClassName="clock__title">HOURS</label>
                    <label ClassName="clock__amount">20</label>
                </div>
                <div className="clock__minutes">
                    <label ClassName="clock__title">MINUTES</label>
                    <label ClassName="clock__amount">20</label>
                </div>
                <div className="clock__seconds">
                    <label ClassName="clock__title">SECONDS</label>
                    <label ClassName="clock__amount">20</label>
                </div>
            </div>
        )
    }
}

export default Clock;