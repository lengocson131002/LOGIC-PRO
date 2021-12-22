import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const LinkButton = styled(NavLink).attrs(props => ({
  to: props.href || "#",
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    ${({ center }) => center && `margin: 0 auto;`}

    font-size:${props => props.fsize || "1.7rem"};
    font-weight: ${props => props.fweight || 'normal'};
    color: ${props => props.color || '#000'};
    background:${props => props.background || 'none'};

    border-width: 1.5px;
    border-style: solid;
    border-color: ${props => props.border || 'transparent'};

    width: ${props => props.block ? '100%' : 'fit-content'};
    border-radius: 5px;

    padding: 12px 23px;
    cursor: pointer;

    transition: all 0.5s;

    &:hover,
    &:active{
        background: ${props => props.clickbackground || props.background};
        color: ${props => props.clickcolor || props.color}
    }
  `;
export default LinkButton;