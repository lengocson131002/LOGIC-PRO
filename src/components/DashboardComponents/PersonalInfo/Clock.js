import React from 'react';
import styled from 'styled-components';
import { GiAlarmClock } from 'react-icons/gi';

const ClockStyled = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    & .clock-icon {
        font-size: 5rem;
    }
    & span {
        display: block;
        font-size: 2.4rem;
        font-weight: 500;
    }
`;

const Clock = (props) => {
    return (
        <ClockStyled>
            <GiAlarmClock className="clock-icon" />
            <span>{props.clock}</span>
        </ClockStyled>
    )
}

export default Clock;
