import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const InputCheckBoxStyled = styled.div`

    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.9rem;
    font-weight: lighter;
    
    input[type="checkbox"] {
        position: relative;
        appearance: none;
        width: 2rem;
        height: 2rem;
        border-radius: 3px;
        border: 2px solid ${props => props.theme.colors.tertiary};
        cursor: pointer;

        display: grid;
        place-content: center;
    }
    input[type="checkbox"]::before {
        content: "";
        width: 70%;
        height: 70%;
        border-radius: 1px;
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        background: ${props => props.theme.colors.primary};
        transform-origin:center;
        transition: all 0.3s;
    }
    input[type="checkbox"]:checked::before {
        transform: translate(-50%, -50%) scale(1)
    }

    & a {
        display: inline-block;
        margin-left: 0.5rem;
        text-decoration: underline;
        font-weight: 400;
        color: ${props => props.theme.colors.secondaryLight};
        transition: all 0.3s;

        &:hover {
            text-decoration-color: transparent;
        }
    }
`;
const InputCheckBox = () => {
    return (
        <InputCheckBoxStyled>
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">I agree with
                <NavLink to="#">Terms and Conditions</NavLink>
            </label>
        </InputCheckBoxStyled>
    )
}


export default InputCheckBox;
