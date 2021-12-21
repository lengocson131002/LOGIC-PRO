import ContentWrapper from "./ContentWrapper"
import Dashboard from "./Dashboard/Dashboard";
import MakeDeposit from "./MakeDeposit/MakeDeposit";
import Withdraw from "./Withdraw";
import Referrals from "./Referrals";
import DepositList from "./DepositList/DepositList";
import History from "./History/History";
import Security from "./Security";
import EditProfile from "./EditProfile/EditProfile";
import Timer from '../Timer/Timer';
import styled from "styled-components";
import { Fragment } from "react";

const MainContentStyled = styled.div`
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
                {/* <Dashboard /> */}
                {/* <MakeDeposit /> */}
                {/* <Withdraw /> */}
                {/* <Referrals /> */}
                {/* <DepositList /> */}
                {/* <History /> */}
                {/* <Security /> */}
                <EditProfile />
            </ContentWrapper>
        </MainContentStyled>
    )
}

export default MainContent;
