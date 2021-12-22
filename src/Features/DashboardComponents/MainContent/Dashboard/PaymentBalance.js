import styled from "styled-components"
import PaymentBalanceItem from "./PaymentBalanceItem";
import Images from "../../../../Constants/images";
const Wrapper = styled.div`
    & h4 {
        font-size: 3rem;
        font-weight: 400;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 3rem;
    }
`;
const PaymentBalanceStyled = styled.div`
    display: grid;
    justify-items: center;
    gap: 8px;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));

    @media (max-width: 480px) {
        display: none;
    }

`;

const PaymentBalance = () => {
    return (
        <Wrapper>
            <h4>PAYMENT BALANCE</h4>
            <PaymentBalanceStyled>
                <PaymentBalanceItem
                    coin={Images.coins.COIN_1}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_2}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_3}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_4}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_5}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_6}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_7}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_8}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_9}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_10}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_11}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_12}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_13}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={Images.coins.COIN_14}
                    balance="10"
                    deposit="10" />
            </PaymentBalanceStyled>
        </Wrapper>
    )
}

export default PaymentBalance;
