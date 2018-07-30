import React, { Component } from 'react'

class Clock extends Component {
    render() {
        const timeleft = this.props.timeleft

        const intDays = function () {
            return Math.trunc(timeleft.asDays())
        }
        return (
            <div className="clock">
                <div className="clock__days clock__box">
                    <label className="clock__title">DAYS</label>
                    <label className="clock__amount">{intDays()}</label>
                </div>
                <div className="clock__hours clock__box">
                    <label className="clock__title">HOURS</label>
                    <label className="clock__amount">{timeleft.hours()}</label>
                </div>
                <div className="clock__minutes clock__box">
                    <label className="clock__title">MINUTES</label>
                    <label className="clock__amount">{timeleft.minutes()}</label>
                </div>
                <div className="clock__seconds clock__box">
                    <label className="clock__title">SECONDS</label>
                    <label className="clock__amount">{timeleft.seconds()}</label>
                </div>
            </div>
        )
    }
}

export default Clock;