import styled from "styled-components";
import DashboardCard from "../../DashboardCard";
import { BsCashCoin } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import Button from "../../../../UI/Button";
import ContentHeader from "../ContentHeader";
import InputAmount from "../../InputAmount";
import InputSelect from "../../InputSelect";

const WithdrawStyled = styled.div`
    & .inputs {
        display: flex;
        gap: 2rem;
        margin-bottom: 5rem;

        & .input-payment {
            display: flex;
            gap: 2rem;

            & .available-amount {
               display: flex;
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
                    <InputSelect
                        options={options}
                    />
                </DashboardCard>
                <DashboardCard
                    icon={<FaCoins />}
                    name="Enter amount"
                >
                    <div className="input-payment">
                        <InputAmount />
                        <div className="available-amount">
                            <p>Available amount</p>
                            <span>0 $</span>
                        </div>
                    </div>
                </DashboardCard>
            </div >
            <Button
                href="#"
                className="btn-cta"
                background="#f1c069"
                clickbackground="#ffb83d"
                center
            >Make deposit &rarr; </Button>
        </WithdrawStyled >
    )
}

export default Withdraw;
