import React from 'react';
import styled from 'styled-components';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
const FooterLinkStyled = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    /* width: fit-content; */
    align-self: start;

    &:hover  {
        .arrow-icon {
            color: #fff;
        }
        a {
             color: ${props => props.theme.colors.secondaryLight};
        }
    }
    & .arrow-icon {
        color: ${props => props.theme.colors.secondaryLight};
        font-size: 2.5rem;
        transition: all 0.5s;
    }

    & a {
        font-size: 1.9rem;
        font-weight: 400;
        letter-spacing: -0.5px;
        text-transform: uppercase;
        transition: all 0.5s;
        color: #fff;
        text-decoration: none;
    }
`;

const FooterLink = (props) => {
    return (
        <FooterLinkStyled>
            <HiOutlineArrowNarrowRight className="arrow-icon" />
            <NavLink to={props.to}>{props.name}</NavLink>
        </FooterLinkStyled>
    )
}

export default FooterLink;
