import styled from "styled-components";
const CalculateFormStyled = styled.div`
    position: absolute;
    top: 35rem;
    left: 50%;
    transform: translateX(-50%);

    padding: 6rem;
    border-radius: 15px;
    width: 70%;
    background: ${props => props.theme.colors.primaryLight};
    
    & .invest-button {
        position: absolute;
        bottom: -2rem;
        right: 4rem;
    }
`;

export default CalculateFormStyled;