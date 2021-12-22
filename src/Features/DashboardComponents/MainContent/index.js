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
                <Dashboard />
                {/* <MakeDeposit /> */}
                {/* <Withdraw /> */}
                {/* <Referrals /> */}
                {/* <DepositList /> */}
                {/* <History /> */}
                {/* <Security /> */}
                {/* <EditProfile /> */}
            </ContentWrapper>
        </MainContentStyled>
    )
}

export default MainContent;
