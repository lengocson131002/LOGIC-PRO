import styled from "styled-components";


const NewsItemStyled = styled.div`  
    margin: 0 2rem;
    background: rgba(0, 0 , 0 , 0.5);
    border-radius: 5px;
    padding:8rem 3rem 3rem 3rem; 
    position: relative;
    font-weight: 300;
    max-width: 45rem;
    & div {
        position: absolute;
        top: 3rem;
        left: 0;
        color: ${props => props.theme.colors.tertiary};
        background: ${props => props.theme.colors.secondaryLight};
        padding: 0.5rem 3rem;
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
    }
    & span {
        display: block;
        color:  ${props => props.theme.colors.secondaryLight};
        font-size: 1.9rem;
        font-weight: 500;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
    & p {
        font-size: 1.7rem;
        margin-bottom: 2rem;
    }


`;
export default NewsItemStyled;