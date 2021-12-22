import styled from "styled-components";
import DashboardCard from "../DashboardCard";
import ContentHeader from "./ContentHeader";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import InputSelect from "../../General/InputSelect";

const ReferralsStyled = styled.div`
    & .referral-info {
        display: flex;
        gap: 2rem;
        margin-bottom: 2rem;

        @media (max-width: 1445px) {
            flex-direction: column;
        }
        @media (max-width: 1024px) {
            flex-direction: row;
        }
        @media (max-width: 828px) {
            flex-direction: column;
        }
    }
`;


const Amount = styled.div`
    font-size:3rem;
    font-weight:bold;
    color: ${({ theme }) => theme.colors.primaryLight};
    margin-bottom: 1rem;

`;

const Count = styled.div`
    display: flex;
    gap: 2rem;
    font-size: 2rem;

    & span {
        font-size: 2.4rem;
    }
`;


const Filter = styled.div`
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
    padding: 3rem;
    display: grid;
    margin-bottom: 6rem;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`;

const FilterItem = styled.div`
    & span {
        color: ${({ theme }) => theme.colors.primary};
        display: block;
        margin-bottom: 0.5rem; 
    }
`;

const ReferralContent = styled.div`
    & h4 {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.primary};
    }
`
const options = [
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
];

const Referrals = () => {
    return (
        <ReferralsStyled>
            <ContentHeader>Referral</ContentHeader>
            <div className="referral-info">
                <DashboardCard
                    icon={<BsFillPersonLinesFill />}
                    name="Your upline"
                >
                    You don't have an upline
                </DashboardCard>
                <DashboardCard
                    icon={<FaCoins />}
                    name="Total referral commission"
                >
                    <Amount>$ 0.00</Amount>
                    <Count>
                        <p>Referral: <span>0</span></p>
                        <p>Active: <span>0</span></p>
                    </Count>
                </DashboardCard>
            </div>
            <Filter>
                <FilterItem>
                    <span>Date from</span>
                    <InputSelect options={options} />
                </FilterItem>
                <FilterItem>
                    <span>Month from</span>
                    <InputSelect options={options} />
                </FilterItem>
                <FilterItem>
                    <span>Year from</span>
                    <InputSelect options={options} />
                </FilterItem>
                <FilterItem>
                    <span>Date to</span>
                    <InputSelect options={options} />
                </FilterItem>
                <FilterItem>
                    <span>Month to</span>
                    <InputSelect options={options} />
                </FilterItem>
                <FilterItem>
                    <span>Year to</span>
                    <InputSelect options={options} />
                </FilterItem>
            </Filter>

            <ReferralContent>
                <h4>YOUR REFERRAL</h4>
            </ReferralContent>
        </ReferralsStyled>
    )
}

export default Referrals;
