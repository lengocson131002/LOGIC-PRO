import ContentWrapper from "./ContentWrapper"
import Dashboard from "./Dashboard";
import MakeDeposit from "./MakeDeposit";
import Withdraw from "./Withdraw";
import Referrals from "./Referrals";
import DepositList from "./DepositList";
import History from "./History";
import Security from "./Security";
import EditProfile from "./EditProfile";
import Timer from '../Timer';
import styled from "styled-components";
import {
    Routes,
    Route
} from 'react-router-dom';


const MainContentStyled = styled.div`
    height: 100%;

    .top-timer {
        margin: 2rem auto;
        display:none;
        align-items: center;
        justify-content: center;

        @media (max-width: 1024px) {
            display:flex;
        }
    }
`

const MainContent = () => {

    return (
        <MainContentStyled>
            <Timer className="top-timer" />
            <ContentWrapper>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/account" element={<Dashboard />} />
                    <Route path="/deposit" element={<MakeDeposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/referrals" element={<Referrals />} />
                    <Route path="/deposit_list" element={<DepositList />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/edit_account" element={<EditProfile />} />
                </Routes>
            </ContentWrapper>
        </MainContentStyled>
    )
}

export default MainContent;
