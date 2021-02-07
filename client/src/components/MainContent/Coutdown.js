import React from 'react';

const Timer = (props) => {

    const calculateCountDown = (time) => {
        
        let diff = (Date.parse(new Date(time)) - Date.parse(new Date())) / 1000;

        if (diff <= 0) return false;

        const timeLeft = {
            hours: 0,
            min: 0,
            sec: 0,
            milisec: 0,
        }
        if (diff >= 3600) { // 60 * 60
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
        
        return timeLeft;
    }
    setInterval(() => {
        const date = calculateCountDown();
        console.log(date.milisec)
    }, 1000)

    return (
        <div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    )
}

export default Timer;