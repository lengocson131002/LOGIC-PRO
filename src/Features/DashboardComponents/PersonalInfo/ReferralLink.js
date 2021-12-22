import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ReferralLinkStyled = styled.div`
    text-align: center;

    & h4 {
        font-size: 1.9rem;
        font-weight: 400;
    }

    & a {
        display: block;
        color:${props => props.theme.colors.secondaryLight};
        text-decoration-color: transparent;
        font-weight: lighter;
        width: 50%;
        margin: 1rem auto 0 auto;
        transition: all 0.3s;

        &:hover {
            text-decoration-color: ${props => props.theme.colors.secondaryLight};
        }
    }
`;

const ReferralLink = () => {
    return (
        <ReferralLinkStyled>
            <h4>YOUR REFFERAL LINK</h4>
            <NavLink to="#">https://logicpro.biz/?ref=lnson1310</NavLink>
        </ReferralLinkStyled>
    )
}

export default ReferralLink;
