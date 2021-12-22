import styled from "styled-components";

const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 5rem;
    background: ${props => props.theme.colors.tertiary};
    border-top-left-radius: 5rem;
    border-top-right-radius: 5rem;
    box-shadow: inset 0 6px 38px 5px rgba(0, 0, 0,0.5);

    @media (max-width: 1200px) {
        padding: 5rem 2rem;
    }
   
    @media (max-width: 1024px) {
        border-top-left-radius: 0;
        padding: 5rem 1rem;

    }

`;

export default ContentWrapper;
