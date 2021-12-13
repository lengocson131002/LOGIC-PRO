import styled from "styled-components";
const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    background: rgba(0, 0,0, 0.5);
    padding: 2rem;
    border-radius: 10px;

    & p {
        font-weight: bold;
        font-size: 1.8rem;
        color: ${props => props.theme.colors.primary};
    }

    & span {
        font-weight: bold;
        font-size: 3rem;
    }
`;


const TotalItem = (props) => {
    return (
        <Item >
            <p>{props.totalName}</p>
            <span>${props.amount}</span>
        </Item>
    );
}
export default TotalItem;