import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import InputCode from './InputCode';
import { NavLink } from 'react-router-dom';

const LoginInputStyled = styled.div`
    & .inputs-top {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        gap: 2rem;

        @media screen and (max-width: 600px) {
            flex-direction: column;
            gap: 0;
        }

        & .input {
            flex-grow: 1;
        }
    }
    
    .input {
        margin-bottom: 2rem;
    }
    
    & a {
        display: block;
        font-size: 1.9rem;
        color: ${props => props.theme.colors.secondaryLight};
        font-weight: normal;
        text-decoration: underline;
        transition: all 0.3s;
        margin:3rem 0;

        &:hover {
            text-decoration-color: transparent;
        }
    }
`;


const LoginInput = () => {
    return (
        <LoginInputStyled>
            <div class="inputs-top">
                <Input
                    className="input"
                    required
                    id="username"
                    label="Username "
                />
                <Input
                    className="input"
                    required
                    id="password"
                    label="Password "
                />
            </div>

            <InputCode
                className="input"
                id="code"
                label="Enter code "
            />
            <NavLink to="/reset-password" >Reset password</NavLink>
        </LoginInputStyled>
    )
}

export default LoginInput;
