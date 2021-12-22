import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';

const ReferralLinkStyled = styled.div`

background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 3rem;

    & .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 3rem;
        margin-bottom: 3rem;

        &  h4 {
            font-weight: 400;
            color: ${props => props.theme.colors.primary};
        }
    }

    & .link {
        font-size: 2rem;
        font-weight: lighter;
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        margin-bottom: 2rem;

    }

    & .copy-link {
        font-size: 1.5rem;
        font-weight: lighter;
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: transparent;
        transition: all 0.3s;
        &:hover {
            text-decoration-color: inherit;
            color: ${props => props.theme.colors.primary};
        }
    }
`;

const ReferralLink = () => {
    return (
        <ReferralLinkStyled>
            <div className="header">
                <h4>YOUR BALANCE</h4>
                <FaLink />
            </div>
            <p className="link">https://logicpro.biz/?ref=lnson1310</p>
            <p className="copy-link">COPY LINK</p>

        </ReferralLinkStyled>
    )
}

export default ReferralLink;
