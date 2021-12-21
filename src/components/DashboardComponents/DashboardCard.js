import styled from "styled-components";
const Card = styled.div`
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
    padding: 3rem;
    flex: 1;
`;

const Name = styled.div`
    font-size: 2.4rem;
    text-transform: uppercase;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2.8rem;
    letter-spacing: -1px;
`;

const Icon = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 5rem;
    margin-bottom: 2rem;
`;


const DashboardCard = ({ icon, name, children }) => {
    return (
        <Card>
            <Icon>{icon}</Icon>
            <Name>{name}</Name>
            {children}
        </Card >
    )
}

export default DashboardCard;
