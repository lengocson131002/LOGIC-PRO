import React from 'react';
import CalculateFormStyled from './CalculateForm.styled';
import InputPlan from './InputPlan';
import LinkButton from '../../../UI/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';

const CalculateForm = (props) => {
    const theme = useTheme();
    return (
        <CalculateFormStyled >
            <InputPlan />
            <LinkButton
                className="invest-button"
                background={theme.colors.primary}
                clickbackground={theme.colors.secondaryLight}
                fontsize="2rem"
            >
                INVEST NOW <FaArrowRight style={{
                    marginLeft: "1rem"
                }} />
            </LinkButton>
        </CalculateFormStyled >
    )
}

export default CalculateForm
