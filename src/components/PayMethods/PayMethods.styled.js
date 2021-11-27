import styled from "styled-components";
const PayMethodsStyled = styled.div`
    display: flex;
    gap: 2rem;
    padding: 2.5rem 4rem;
    background: ${props => props.theme.colors.tertiary};
    margin-bottom: 5rem;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;

    & img{
        flex: 1;
        width: 10rem;
    }
`;
export default PayMethodsStyled;