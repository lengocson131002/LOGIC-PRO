import styled from "styled-components";

const NewsStyled = styled.div`
   padding: 5rem 0;

    & button::before,
    & button:after
     {
        transition: all 0.2s;
        font-size: 4rem;
        color: ${props => props.theme.colors.secondary}
    }

    & button:nth-child(1) {
        left: -4rem;
    }

    @media(max-width: 1023px) {
        button {
            display: none !important;
        }
    }

`;
export default NewsStyled;