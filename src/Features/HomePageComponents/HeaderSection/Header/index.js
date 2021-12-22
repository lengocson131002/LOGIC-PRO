import Container from '../../../../Components/Container';
import HeaderStyled from './Header.styled';
import logo from '../../../../asset/logo/logo-top.png';
import React from 'react';
import ListContact from '../../../../Components/Contacts';
import { LinkButton } from '../../../../Components/Buttons';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

const Header = (props) => {

    const theme = useTheme();

    return (
        <Container>
            <HeaderStyled>
                <div className="header-top">
                    <div className="logo">
                        <NavLink
                            to="/"
                            className="logo-image">
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <ListContact />
                    <div className="actions">

                        <LinkButton
                            color="#fff"
                            href="#"
                            background="#6996d2"
                            clickbackground="#0f7dea"
                        >Representatives</LinkButton>
                        <LinkButton
                            color="#fff"
                            href="#"
                            background="#039746"
                            clickbackground="#00c616"
                        >Live chat</LinkButton>

                    </div>
                </div>
                <div className="header-bottom">
                    <nav className="nav-bottom">
                        <div >
                            <NavLink
                                to="/"
                                className="nav-link"
                            >Home</NavLink>
                        </div>
                        <div >
                            <a
                                href="#about"
                                className="nav-link"
                            >About us</a></div>
                        <div >
                            <a
                                className="nav-link"
                                href="#investment">Investment Plans</a>
                        </div>
                        <div >
                            <a
                                className="nav-link"
                                href="#referral">Refferal Program</a>
                        </div>
                        <div >
                            <NavLink
                                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
                                to="/faq">FAQ</NavLink>
                        </div>
                        <div >
                            <NavLink
                                className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}
                                to="/help">HELP</NavLink>
                        </div>
                    </nav>
                    <div className="actions">
                        <LinkButton
                            href="/login"
                            color="#343a40"
                            background={theme.colors.primary}
                            clickbackground="#ffb83d"
                        >Login</LinkButton>
                        <LinkButton
                            href="/registration"
                            color="#ffb83b"
                            clickbackground="#ffb83d"
                            clickcolor="#fff"
                            border="#ffb83d"
                        >Registration</LinkButton>
                    </div>
                </div>
            </HeaderStyled >
        </Container >
    )
}

export default Header;
