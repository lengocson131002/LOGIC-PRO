import React from 'react';
import PlanBlockStyled from './PlanBlock.styled';

const PlanBlock = (props) => {
    return (
        <PlanBlockStyled>
            <div className="plan-title">{props.dailyPercent}% DAILY</div>
            <div className="plan-subtitle">FOR {props.numOfDays} DAYS</div>
            <div className="plan-text">
                min $({props.min}) <br />
                Principal return
            </div>
        </PlanBlockStyled>
    )
}

export default PlanBlock
