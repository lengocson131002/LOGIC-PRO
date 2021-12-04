import ListContact from "../Contacts/ListContact";
import MobileNavigationStyled from "./MobileNavigation.styled";
import MobileNavigationLink from "./MobileNavigationLink";
import LinkButton from "../../UI/LinkButton";
import ToggleButton from "../../UI/ToggleButton";
import logo from '../../asset/logo/logo-top.png';
import { NavLink } from "react-router-dom";
import { useState } from 'react';

const MobileNavigation = () => {
    const [navClose, setNavClose] = useState(true);

    const toggleNavHandler = () => {
        setNavClose(prevState => !prevState);
    }

    return (
        <MobileNavigationStyled close={navClose}>
            <div className="logo">
                <NavLink to="/home">
                    <img src={logo} alt="" />
                </NavLink>
                <ToggleButton
                    onClick={toggleNavHandler}
                    close={navClose}
                    className="icon-toggle"></ToggleButton>
            </div>
            <ul className="nav-top">
                <MobileNavigationLink to="/home" name="Home" />
                <MobileNavigationLink to="/about-us" name="About us" />
                <MobileNavigationLink to="/investment-plans" name="Investment plans" />
                <MobileNavigationLink to="/referral-program#" name="Referral Program" />
                <MobileNavigationLink to="/faq" name="FAQ" />
                <MobileNavigationLink to="/help" name="Help" />
                <MobileNavigationLink to="/login" name="Login" />
                <MobileNavigationLink to="/registration" name="Registration" />
            </ul>
            <div className="nav-bottom">
                <ListContact />
                <div>
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
        </MobileNavigationStyled>
    )
}

export default MobileNavigation;
