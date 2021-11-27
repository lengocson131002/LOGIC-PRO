import React from 'react';
import ListPlan from './ListPlan/ListPlan';
import Container from '../../UI/Container';
import CalculateForm from './CalculateForm/CalculateForm';
import CalculateStyled from './Calculate.styled';

const Calculate = () => {
    return (
        <CalculateStyled>
            <Container>
                <ListPlan />
                <CalculateForm />
            </Container>
        </CalculateStyled>
    )
}

export default Calculate;
