import styled from "styled-components";
const Item = styled.div`
    width: 100%;
    border-radius: 10px;
    background: rgba(0, 0,0, 0.5);
    padding:2rem 1rem;

    & .amount {
        display: flex;
        flex-direction: column;
        align-items: center; 
        font-weight: 600;
        margin-top: 1rem;

        & p {
            font-size: 1.4rem;
            color: ${props => props.theme.colors.primary};
        }

        & span {
            font-size: 1.8rem;
            color: ${props => props.theme.colors.primaryLight};
        }
    }

`;


const PaymentBalanceItem = (props) => {
    return (
        <Item>
            <img src={props.coin} alt="" />
            <div className="amount">
                <p>BALANCE</p>
                <span>{props.balance} $</span>
            </div>
            <div className="amount">
                <p>ON DEP</p>
                <span>{props.deposit} $</span>
            </div>
        </Item>
    )
}

export default PaymentBalanceItem;
