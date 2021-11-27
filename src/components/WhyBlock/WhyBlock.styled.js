import styled from "styled-components";
const WhyBlockStyled = styled.div`
    background: rgba(0, 0,0, 0.3);
    border-radius: 15px;
    display: flex ;
    justify-content: start;
    gap: 5rem;
    align-items: center;
    margin: 5rem auto;
    color: ${props => props.theme.colors.primary};
    padding: 5rem 10rem;

    & > span {
        display: block;
        font-size: 5.5rem;
    }

    & > div {
        max-width: 75%;
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows:repeat(2, auto) ;
        align-content: start;
        gap: 4rem 6rem;

        & .why-item {
            justify-self: start;
            display: flex;
            justify-content: space-between;

            & .why-icon {
                color: #fff;
                min-width: 6rem;
                height: 6rem;
                margin-right: 2rem;
            }

            & p {
                font-size: 1.7rem;
                font-weight: lighter;
                line-height: 25px;
            }
        }
    }
`;
export default WhyBlockStyled;