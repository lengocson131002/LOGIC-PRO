import Header from "../Features/DashboardComponents/Header";
import styled from 'styled-components';
import Menu from "../Features/DashboardComponents/Menu";
import PersonalInfo from "../Features/DashboardComponents/PersonalInfo";
import MainContent from "../Features/DashboardComponents/MainContent";
import MobileNavigation from '../Components/MobileNavigation';
const Wrapper = styled.div`
    display: flex;
    width: 100%;

    & .dashboard-content {
        flex: 1;
    }
`;

const DashboardPage = () => {
    return (
        <>
            <MobileNavigation
                sticky
            />
            <Wrapper>
                <Menu />
                <div className="dashboard-content">
                    <Header />
                    <MainContent />
                </div>
                <PersonalInfo />
            </Wrapper>
        </>
    )
}

export default DashboardPage;
