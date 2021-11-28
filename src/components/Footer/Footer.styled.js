import styled from "styled-components";

const FooterStyled = styled.div`
    display: flex;
    padding: 5rem;
    justify-content: center;
    gap: 5rem;

    & .footer-logo {
        min-width: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-right: auto;

        & p {
            font-size: 1.7rem;
            font-weight: lighter;
        }

    }

    & .footer-links {
        display: grid;
        grid-template-columns: auto auto;
        min-width: 50rem;
    }
    & .footer-contact {
        max-width: 20rem;
        font-size: 1.7rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-weight: lighter;


        & span {
            display: block;
            font-size: 2rem;
            margin-bottom: 1rem;
            font-weight: 400;
        }

        & p {
            margin-bottom: 0.5rem;
            line-height: 1.5;
        }

        & a {
            text-decoration: none;
            color: ${props => props.theme.colors.secondaryLight}
        }
    }
`;
export default FooterStyled;