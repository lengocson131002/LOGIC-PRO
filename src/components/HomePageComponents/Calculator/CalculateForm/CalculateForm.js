import React from 'react';
import CalculateFormStyled from './CalculateForm.styled';
import InputPlan from './InputPlan';
import LinkButton from '../../../../UI/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const CalculateForm = ({ chosenPlan, onChangePlan }) => {
    const theme = useTheme();
    return (
        <CalculateFormStyled >
            <InputPlan chosenPlan={chosenPlan} onChangePlan={onChangePlan} />
            <LinkButton
                className="invest-button"
                background={theme.colors.primary}
                clickbackground={theme.colors.secondaryLight}
                fsize="2rem"
            >
                INVEST NOW <FaArrowRight style={{
                    marginLeft: "1rem"
                }} />
            </LinkButton>
        </CalculateFormStyled >
    )
}

export default CalculateForm
