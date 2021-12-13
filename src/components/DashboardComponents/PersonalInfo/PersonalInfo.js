import React from 'react';
import styled, { useTheme } from 'styled-components';
import AuthTwoFactors from './AuthTwoFactors';
import Balance from './Balance';
import ReferralLink from './ReferralLink';
import Time from './Time';
import LinkButton from '../../../UI/LinkButton';

const PersonalInfoStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    min-width: 24rem;
    padding: 9rem 1rem 0rem 1rem;

    ${LinkButton} {
        margin: 1.5rem auto ;
        &:hover {
            opacity: 0.7;
        }
    }
`;


const PersonalInfo = (props) => {
    const theme = useTheme();

    return (
        <PersonalInfoStyled>
            <Time />
            <Balance />
            <ReferralLink />
            <AuthTwoFactors checked="" />
            <div>
                <LinkButton
                    href="#"
                    background={theme.colors.primary}
                    fweight="500"
                >Last Investments</LinkButton>
                <LinkButton
                    href="#"
                    background={theme.colors.tertiary}
                    color={theme.colors.primary}
                    fweight="500"
                >Last Withdrawals</LinkButton>
            </div>
        </PersonalInfoStyled>
    )
}

export default PersonalInfo;
