import styled from "styled-components"
import PaymentBalanceItem from "./PaymentBalanceItem";
import coin1 from '../../../../asset/pay_dashboard/coin1.png';
import coin2 from '../../../../asset/pay_dashboard/coin2.png';
import coin3 from '../../../../asset/pay_dashboard/coin3.png';
import coin4 from '../../../../asset/pay_dashboard/coin4.png';
import coin5 from '../../../../asset/pay_dashboard/coin5.png';
import coin6 from '../../../../asset/pay_dashboard/coin6.png';
import coin7 from '../../../../asset/pay_dashboard/coin7.png';
import coin8 from '../../../../asset/pay_dashboard/coin8.png';
import coin9 from '../../../../asset/pay_dashboard/coin9.png';
import coin10 from '../../../../asset/pay_dashboard/coin10.png';
import coin11 from '../../../../asset/pay_dashboard/coin11.png';
import coin12 from '../../../../asset/pay_dashboard/coin12.png';
import coin13 from '../../../../asset/pay_dashboard/coin13.png';
import coin14 from '../../../../asset/pay_dashboard/coin14.png';
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
                    coin={coin1}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin2}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin3}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin4}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin5}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin6}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin7}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin8}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin9}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin10}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin11}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin12}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin13}
                    balance="10"
                    deposit="10" />
                <PaymentBalanceItem
                    coin={coin14}
                    balance="10"
                    deposit="10" />
            </PaymentBalanceStyled>
        </Wrapper>
    )
}

export default PaymentBalance;
