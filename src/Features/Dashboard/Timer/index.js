import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Clock from './Clock';

const TimerStyled = styled.div`
   
    & .date-bottom {
        display: flex;
        flex-direction: column;
        margin-left: 6rem;
        font-size: 1.4rem;
        color: ${props => props.theme.colors.primaryLight};
    }
`;

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Timer = (props) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setDate(new Date());
        }, 1000);
    }, []);

    return (
        <TimerStyled {...props} >
            <Clock clock={date.toLocaleTimeString()} />
            <div className="date-bottom">
                <span className="month-date">{months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</span>
                <span className="weekday">{days[date.getDay()]}</span>
            </div>
        </TimerStyled>
    )
}

export default Timer;
