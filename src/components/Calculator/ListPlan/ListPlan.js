import React from 'react';
import PlanBlock from './PlanBlock';
import ListPlanStyled from './ListPlan.styled';

const ListPlan = () => {
    return (
        <ListPlanStyled>
            <PlanBlock
                dailyPercent="2"
                numOfDays="15"
                min="10"
            />

            <PlanBlock
                dailyPercent="2.5"
                numOfDays="30"
                min="5000" />

            <PlanBlock
                dailyPercent="3"
                numOfDays="45"
                min="10000" />
        </ListPlanStyled>
    )
}

export default ListPlan
