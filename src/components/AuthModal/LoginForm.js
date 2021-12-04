import React, { useState } from 'react';
import LoginInput from './LoginInput';
import Button from '../../UI/Button';
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
const LoginForm = () => {
    const theme = useTheme();
    return (
        <AuthFormStyled>
            <h2>Login</h2>
            <LoginInput />
            <Button
                href="#"
                className="btn-cta"
                background={theme.colors.primary}
                clickbackground="#ffb83d"
                fweight="lighter"
                fsize="2rem"
            >Login <FaArrowRight />
            </Button>
        </AuthFormStyled>
    )
}

export default LoginForm;
