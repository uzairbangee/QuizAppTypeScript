import React, {Fragment, useState, useEffect} from 'react';
import {timeType} from './../Types/Types';


const Timer = () => {
    const [seconds, setSeconds] = useState(600);
    const [time, setTime] = useState({
        "h": '00',
        "m": '00',
        "s": '00'
    });

    const secondsToTime = (secs: number) => {
        let hours = Math.floor(secs / (60 * 60));
        var formattedHours = ("0" + hours).slice(-2);
    
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        var formattedMinutes = ("0" + minutes).slice(-2);
    
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        var formattedSeconds = ("0" + seconds).slice(-2);
    
        const obj: timeType = {
                    "h": formattedHours,
                    "m": formattedMinutes,
                    "s": formattedSeconds
                };
        return obj;
    }

    const countDown = () => {
        // Remove one second, set state so a re-render happens.
        let sec = seconds - 1;
        setSeconds(sec);
        setTime(secondsToTime(sec));
        
    }

    useEffect(() => {
        
        const startTimer = () => {
            window.setTimeout(countDown, 1000);
        }

        if(seconds !== 0)
            startTimer();

    }, [seconds])

    return (
        <Fragment>
            {time.h}:{time.m}:{time.s}
        </Fragment>
    )
}

export default Timer;