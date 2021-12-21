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
    padding: 2rem 0;
    border-radius: 10px;
    flex: 1;

    & p {
        font-weight: bold;
        font-size: 1.8rem;
        color: ${props => props.theme.colors.primary};
    }

    & span {
        font-weight: bold;
        font-size: 3rem;
    }

    @media (max-width: 1024px) {
        min-width: calc(50% - 1rem);
    }
    @media (max-width: 767px) {
        min-width:100%;
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