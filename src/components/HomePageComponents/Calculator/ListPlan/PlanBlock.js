import React from 'react';
import PlanBlockStyled from './PlanBlock.styled';

const PlanBlock = (props) => {
    return (
        <PlanBlockStyled {...props}>
            <div className="plan-title">{props.dailyPercent}% DAILY</div>
            <div className="plan-subtitle">FOR {props.numOfDays} DAYS</div>
            {props.home &&
                <div className="plan-text">
                    min ${props.min} <br />
                    Principal return
                </div>}
            {!props.home &&
                <div className="plan-text">
                    ${props.min} - ${props.max} <br />
                    Principal return
                </div>}

        </PlanBlockStyled>
    )
}

export default PlanBlock
