import ContentHeader from "../ContentHeader";
import styled from 'styled-components';
import ListPlan from "./ListPlan";
import DashboardCard from "../../DashboardCard";
import { BsCashCoin } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import InputAmount from "../../InputAmount";
import InputSelect from "../../InputSelect";
import { useState } from "react";
import InputCheckBox from "../../../HomePageComponents/AuthModal/InputCheckBox";
import Button from "../../../../UI/Button";

const MakeDepositStyled = styled.div`
    & .inputs {
        display: flex;
        gap: 2rem;
        margin: 5rem 0;
    }
    & .input-payment {
        display: flex;
        gap: 1rem;
    }
`;
const options = [
    { value: '0', name: 'Perfect Money' },
    { value: '1', name: 'BitCoin' },
    { value: '2', name: 'Son Coin' },
    { value: '3', name: 'DBM Coin' },
];
const MakeDeposit = () => {
    const [selected, setSelected] = useState({
        name: 'Choose one'
    });

    console.log(selected);
    const setSelectedHandler = (index) => {
        setSelected(options[index]);
    }
    return (
        <MakeDepositStyled>
            <ContentHeader >MAKE DEPOSIT</ContentHeader>
            <ListPlan />
            <div className="inputs">

                <DashboardCard
                    icon={<FaCoins />}
                    name="Enter amount"
                >
                    <InputAmount />

                </DashboardCard>

                <DashboardCard
                    icon={<BsCashCoin />}
                    name="Payment system"
                >
                    <div className="input-payment">
                        <InputSelect
                            options={options}
                            selected={selected}
                            setSelected={setSelectedHandler}
                        />
                        <InputCheckBox
                            label="From payment system"
                            checked
                        />
                    </div>
                </DashboardCard>
            </div>
            <Button
                href="#"
                className="btn-cta"
                background="#f1c069"
                clickbackground="#ffb83d"
                center
            >Make deposit &rarr;</Button>
        </MakeDepositStyled>
    )
}

export default MakeDeposit;
