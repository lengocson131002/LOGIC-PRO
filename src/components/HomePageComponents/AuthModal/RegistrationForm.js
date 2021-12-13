import React, { useState } from 'react';
import RegistrationInput from './RegistrationInput';
import Button from '../../../UI/Button';
import styled, { useTheme } from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';

const AuthFormStyled = styled.form`
    & h2 {
        font-size: 4rem;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 2rem;
    }

    ${Button} {
        position: absolute;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
    }

`;
const RegistrationForm = () => {
    const theme = useTheme();
    return (
        <AuthFormStyled>
            <h2>Registration</h2>
            <RegistrationInput />
            <Button
                href="#"
                className="btn-cta"
                background={theme.colors.primary}
                clickbackground="#ffb83d"
                fweight="lighter"
                fsize="2rem"
            >Registration <FaArrowRight />
            </Button>
        </AuthFormStyled>
    )
}

export default RegistrationForm;
