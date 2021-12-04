import styled from "styled-components";
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 1rem;

    font-size:${props => props.fsize || "1.7rem"};
    font-weight: ${props => props.fweight || 'normal'};
    color: ${props => props.color || '#000'};
    background:${props => props.background || 'none'};

    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.border || 'transparent'};

    width: fit-content;
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
export default Button;