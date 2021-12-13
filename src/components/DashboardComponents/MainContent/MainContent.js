import ContentWrapper from "./ContentWrapper"
import Dashboard from "./Dashboard/Dashboard";
import MakeDeposit from "./MakeDeposit/MakeDeposit";
import Withdraw from "./Withdraw/Withdraw";

const MainContent = () => {
    return (
        <ContentWrapper>
            {/* <Dashboard /> */}
            {/* <MakeDeposit /> */}
            <Withdraw />
        </ContentWrapper>
    )
}

export default MainContent;
