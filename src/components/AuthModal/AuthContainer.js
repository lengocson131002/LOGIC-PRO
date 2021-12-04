import React from 'react';
import styled from 'styled-components';
import bgModal from '../../asset/item-background/authbg.png'
import logo from '../../asset/logo/logo-top.png';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import { NavLink } from 'react-router-dom';
const AuthContainerStyled = styled.div`
    position: relative;
    z-index: 1000;
    border-radius: 1rem;
    padding: 4rem 6rem 10rem 6rem;
    background: #7b5940 url(${bgModal}) top right no-repeat;
    background-size: cover;
    box-shadow: 0px 10px 15px 5px rgba(0, 0, 0, 0.15);
    width: 90%;
    max-width: 84rem;
    margin: 5rem auto;

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem 8rem 3rem;
    }

    & a {
        display: block;
        width: 18rem;
        margin: 0 auto 2rem auto;
    }
`;

const AuthContainer = (props) => {
    return (
        <AuthContainerStyled>
            <NavLink to="/" >
                <img src={logo} alt="" /> </NavLink>
            {props.children}
        </AuthContainerStyled>
    )
}

export default AuthContainer;
