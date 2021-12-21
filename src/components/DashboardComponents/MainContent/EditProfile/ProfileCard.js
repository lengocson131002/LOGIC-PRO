import styled from 'styled-components';
const Card = styled.div`
    border-radius: 15px;
    background: rgba(0, 0,0,0.5);
    padding: 26px 38px 74px;
    flex: 1;
    height: fit-content;
`;
const CardHeader = styled.h4`
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
    font-size: 2.5rem;
    margin: 4rem 0;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const ProfileCard = ({ header, children }) => {
    return (
        <Card>
            <CardHeader>{header}</CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    )
}

export default ProfileCard;
