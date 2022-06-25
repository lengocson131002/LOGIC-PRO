import Header from "./Header";
import styled from 'styled-components';
import Menu from "./Menu";
import PersonalInfo from "./PersonalInfo";
import MainContent from "./MainContent";
import MobileNavigation from '../../Components/MobileNavigation';
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
                breakpoint="1024px"
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
