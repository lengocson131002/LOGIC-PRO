import React from 'react';
import PlanBlock from './PlanBlock';
import ListPlanStyled from './ListPlan.styled';

const ListPlan = ({ chosenPlan, onChangePlan }) => {
    const { type } = chosenPlan;
    return (
        <ListPlanStyled>
            <PlanBlock
                onClick={() => {
                    onChangePlan(1);
                }}
                className={type === 1 ? "chosen" : ""}
                dailyPercent="2"
                numOfDays="15"
                min="10"
            />

            <PlanBlock
                onClick={() => {
                    onChangePlan(2);
                }}
                className={type === 2 ? "chosen" : ""}
                dailyPercent="2.5"
                numOfDays="30"
                min="5000" />

            <PlanBlock
                onClick={() => {
                    onChangePlan(3);
                }}
                className={type === 3 ? "chosen" : ""}
                dailyPercent="3"
                numOfDays="45"
                min="10000" />
        </ListPlanStyled>
    )
}

export default ListPlan
