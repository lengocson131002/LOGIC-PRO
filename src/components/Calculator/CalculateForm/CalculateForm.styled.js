import styled from "styled-components";
const CalculateFormStyled = styled.div`
    position: relative;
    padding:4rem 6rem 6rem 6rem;
    border-radius: 15px;
    background: ${props => props.theme.colors.primaryLight};
    margin: -15rem auto 2rem auto;
    width: 80%;

    & .invest-button {
        position: absolute;
        bottom: -2rem;
        right: 4rem;
    }

    @media (max-width: 1023px) {
        width: 100%;

    }
    @media (max-width: 780px) {
        margin-top: 2rem;
        padding:2rem 3rem 4rem 3rem;
    }
`;

export default CalculateFormStyled;