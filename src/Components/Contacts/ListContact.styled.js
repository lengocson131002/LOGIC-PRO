import styled from "styled-components";
const ListContactStyled = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-items: center;
    gap: 10px;
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
        width: 3.5rem;
        height: 3.5rem;
    }
    & .contact-item:hover {
        opacity: 0.8;
    }
`
export default ListContactStyled;