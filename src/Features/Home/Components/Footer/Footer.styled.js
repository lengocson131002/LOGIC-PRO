import styled from "styled-components";

const FooterStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding:6rem 8rem;
    justify-content: space-between;
    gap: 4rem;

    @media (max-width: 1024px) {
        padding:4rem 6rem;
        gap: 2rem;
    }

    & .footer-logo {
        min-width: 20rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & p {
            font-size: 1.7rem;
            font-weight: lighter;
            width: 100%;
            margin-top: 2rem;
        }

    }

    & .footer-right {
        display: flex;
        gap: 2rem;
        @media (max-width: 1200px)  {
            width: 100%;
            justify-content: space-between;
        }
    }

    & .footer-links {
        display: grid;
        grid-template-columns: auto auto;
        min-width: 40rem;

        @media(max-width: 768px) {
            display: none;
        }
    }
    & .footer-contact {
        max-width: 20rem;
        font-size: 1.7rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-weight: lighter;

        @media (max-width: 768px) {
            flex-direction: row;
            max-width: 50%;
            font-size: 1.4rem;
         }

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