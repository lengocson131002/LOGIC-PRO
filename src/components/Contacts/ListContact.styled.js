import styled from "styled-components";
const ListContactStyled = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    gap: 15px;
    color: #fff;
    font-size: 14px;
    width: fit-content;

    & .contact-item {
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        border :2px solid #fff;
        border-radius: 50%;
        transition: all 0.5s;
    }
    & .contact-item:hover {
        opacity: 0.8;
    }
`
export default ListContactStyled;