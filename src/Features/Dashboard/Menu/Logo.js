import Images from '../../../Constants/images';
import styled from 'styled-components';
import React from 'react'
import { NavLink } from 'react-router-dom';

const LogoStyled = styled(NavLink)`
    display: block;
    margin-bottom: 5rem;
`;

const Logo = ({ className }) => {
    return (
        <LogoStyled
            to="/"
            className={className}>
            <img src={Images.LOGO} alt="" />
        </LogoStyled>
    )
}

export default Logo;
