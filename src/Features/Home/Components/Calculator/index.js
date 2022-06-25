import React, { useEffect, useState } from 'react';
import ListPlan from './ListPlan';
import Container from '../../../../Components/Container';
import CalculateForm from './CalculateForm';
import styled from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';

const CalculateStyled = styled.section`
    position: relative;
    padding: 5rem 0;
`;

const plans = [
    {
        type: 1,
        percent: 0.02,
        numOfDays: 15,
        min: 10,
        max: 10000
    },
    {
        type: 2,
        percent: 0.025,
        numOfDays: 30,
        min: 500,
        max: 100000
    },
    {
        type: 3,
        percent: 0.03,
        numOfDays: 45,
        min: 10000,
        max: 500000
    }
]



const Calculate = () => {

    const [chosenPlan, setChosenPlan] = useState(plans[0]);
    const changePlanHandler = (type) => {
        setChosenPlan(plans[type - 1]);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <CalculateStyled id="investment">
            <Container>
                <div data-aos="fade-up">
                    <ListPlan chosenPlan={chosenPlan} onChangePlan={changePlanHandler} />
                    <CalculateForm chosenPlan={chosenPlan} onChangePlan={changePlanHandler} />
                </div>
            </Container>
        </CalculateStyled>
    )
}

export default Calculate;
