import styled from "styled-components";
import DashboardCard from "../DashboardCard";
import { BsCashCoin } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import { Button } from "../../../Components/Buttons";
import ContentHeader from "./ContentHeader";
import InputAmount from "../../General/InputAmount";
import InputSelect from "../../General/InputSelect";

const WithdrawStyled = styled.div`
    & .inputs {
        display: flex;
        gap: 2rem;
        margin-bottom: 5rem;

        @media (max-width: 1444px) {
            flex-direction: column;
        }
        @media (max-width: 1024px) {
            flex-direction: row;
        }
        @media (max-width: 767px) {
            flex-direction: column;
        }

        & .input-payment {
            display: flex;
            justify-content: space-between;
            gap: 2rem;

            & .available-amount {
               display: flex;
               flex-shrink: 0;
               flex-direction: column;
               justify-content: space-around;
               color: ${({ theme }) => theme.colors.primary};
               
               span {
                   font-size: 2rem;
                   font-weight: 600;
               }
            }
        }

    }

`;

const options = [
    { value: '0', name: 'Perfect Money' },
    { value: '1', name: 'BitCoin' },
    { value: '2', name: 'Son Coin' },
    { value: '3', name: 'DBM Coin' },
];
const Withdraw = () => {


    return (
        <WithdrawStyled >
            <ContentHeader >WITHDRAW</ContentHeader>
            <div className="inputs">
                <DashboardCard
                    icon={<BsCashCoin />}
                    name="Payment method"
                >
                    <div className="input-payment">
                        <InputSelect
                            options={options}
                        />
                        <div className="available-amount">
                            <p>Available amount</p>
                            <span>0 $</span>
                        </div>
                    </div>
                </DashboardCard>
                <DashboardCard
                    icon={<FaCoins />}
                    name="Enter amount"
                >
                    <InputAmount />

                </DashboardCard>
            </div >
            <Button
                href="#"
                className="btn-cta"
                background="#f1c069"
                clickbackground="#ffb83d"
                center
            >WITHDRAW FUNDS &rarr; </Button>
        </WithdrawStyled >
    )
}

export default Withdraw;
