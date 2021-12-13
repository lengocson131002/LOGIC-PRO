import Header from "../components/DashboardComponents/Header/Header";
import styled from 'styled-components';
import Menu from "../components/DashboardComponents/Menu/Menu";
import PersonalInfo from "../components/DashboardComponents/PersonalInfo/PersonalInfo";
import MainContent from "../components/DashboardComponents/MainContent/MainContent";

const Wrapper = styled.div`
    display: flex;
    width: 100%;

    & .dashboard-content {
        flex: 1;
    }
`;

const DashboardPage = () => {
    return (
        <Wrapper>
            <Menu />
            <div className="dashboard-content">
                <Header />
                <MainContent />
            </div>
            <PersonalInfo />
        </Wrapper>
    )
}

export default DashboardPage;
