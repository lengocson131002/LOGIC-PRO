import styled from "styled-components";
const PayMethodsStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2.5rem 4rem;
    background: ${props => props.theme.colors.tertiary};
    margin-bottom: 5rem;
    border-radius: 5px;
    justify-content: center;
    align-items: center;

    & img{
        flex: 1;
        max-width: 10rem;
        opacity: 0.3;

        @media (max-width: 768px) {
            max-width: 8rem;
        }
    }
`;
export default PayMethodsStyled;