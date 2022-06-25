import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { InputText } from '../../../Components/Inputs';
import { InputCheckbox } from '../../../Components/Inputs';
import InputCode from './InputCode';
const RegistrationInputStyled = styled.div`
    & .input-info {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }

        & .input {
            flex-grow: 1;
        }
    }
    & .input {
        margin-bottom: 1rem;
    }
    & p {
        text-align: center;
        font-size: 1.6rem;
        font-weight: lighter;
        margin: 2rem 0;
    }

`;

const RegistrationInput = () => {
    return (
        <RegistrationInputStyled>
            <div className="input-info">
                <InputText
                    className="input"
                    required
                    id="username"
                    label="Username "
                />
                <InputText
                    className="input"
                    required
                    id="fullname"
                    label="Full Name "
                />
                <InputText
                    className="input"
                    required
                    id="email"
                    label="Your email"
                    type="email"
                />
                <InputText
                    className="input"
                    required
                    id="confirm-email"
                    label="Confirm your email "
                    type="email"
                />
                <InputText
                    className="input"
                    required
                    id="password"
                    label="Password"
                    type="password"
                />
                <InputText
                    className="input"
                    required
                    id="confirm-password"
                    label="Confirm password "
                    type="password"

                />
                <InputText
                    className="input"
                    id="question"
                    label="Secret question "
                />
                <InputText
                    className="input"
                    id="answer"
                    label="Secret answer "
                />
            </div>
            <InputCode
                className="input"
                id="code"
                label="Enter code"
            />
            <p>You are upline: ??????(sa1234)</p>

            <InputCheckbox
                label={
                    <>I agree with
                        {<NavLink to="#">Terms and Conditions</NavLink>}
                    </>
                }
            />

        </RegistrationInputStyled>
    )
}

export default RegistrationInput;
