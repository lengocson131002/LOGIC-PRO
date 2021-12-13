import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Item = styled(NavLink)`
    &.active {
        color:  ${props => props.theme.colors.secondaryLight};
        .menu-icon {
            filter: invert(62%) sepia(80%) saturate(385%) hue-rotate(354deg) brightness(105%) contrast(101%);
        }
    }
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 2rem;
    cursor: pointer;
    padding: 2rem 0;
    font-weight: 600;
    transition: all 0.4s;
    font-size: 1.8rem;
    text-decoration: none;
    color: #fff;

    .menu-icon {
        transition: all 0.4s;
        filter: invert(100%) sepia(90%) saturate(2%) hue-rotate(227deg) brightness(108%) contrast(100%);
        width: 3.5rem;
        height: 3.5rem;

        & img {
            width: 100%;
        }
    }
    &:hover .menu-icon {
        filter: invert(62%) sepia(80%) saturate(385%) hue-rotate(354deg) brightness(105%) contrast(101%);
    }

    &:hover {
        color: ${props => props.theme.colors.secondaryLight};
    }
`;
const MenuItem = (props) => {
    return (
        <Item to={props.to || "#"}
            className={({ isActive }) => (isActive ? 'active' : '')}
        >
            <div className="menu-icon">
                <img src={props.icon} alt="" />
            </div>
            <div>
                <span>{props.name}</span>
            </div>
        </Item >
    )
}

export default MenuItem
