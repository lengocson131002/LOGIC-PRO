import styled from "styled-components";
import Balance from "./Balance";
import ContentHeader from "../ContentHeader";
import NewsItem from "../../../../Components/NewsItem";
import Total from "./Total";
import PaymentBalance from "./PaymentBalance";
import ReferralLink from './ReferralLink';


const DashboardStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;

    & .top-section, 
    & .bottom-section {
        display: flex;
        gap: 2.5rem;

        @media (max-width: 1600px) {
            flex-direction: column;
        }

    }
    
`

const newsItem = {
    time: "Oct-25-2021 09:03:48 AM",
    title: "Regional representatives and site improvements",
    quote: "Dear investors, By now many of you have already finished two and even three investment cycles for updated investment plans. A lot of you not only have made a noticeably good profit but also have become active project collaborators, making suggestions on what you would like to see improved. Thanks to your initiative, we are ready to announce a few important changes:"
}
const Dashboard = () => {
    return (
        <DashboardStyled>
            <ContentHeader> Dashboard </ContentHeader>
            <div className="top-section">
                <Balance />
                <Total />
            </div>
            <PaymentBalance />
            <div className="bottom-section">
                <ReferralLink />
                <NewsItem
                    display="block"
                    time={newsItem.time}
                    title={newsItem.title}
                    quote={newsItem.quote}
                />
            </div>
        </DashboardStyled>
    )
}

export default Dashboard;
