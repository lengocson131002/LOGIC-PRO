import styled, { useTheme } from "styled-components";
import { FaCoins } from 'react-icons/fa';
import LinkButton from "../../../../UI/LinkButton";


const BalanceStyled = styled.div`
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 3rem;
    & .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 3.8rem;
        margin-bottom: 1rem;

        &  h4 {
            font-weight: 400;
            color: ${props => props.theme.colors.primary};
        }
    }

    & > span {
        font-size: 6rem;

    }

    & .actions {
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
        gap: 3rem;

        & ${LinkButton} {
            flex: 1;
        }
    }
`;

const Balance = () => {
    const theme = useTheme();

    return (
        <BalanceStyled>
            <div className="header">
                <h4>YOUR BALANCE</h4>
                <FaCoins />
            </div>
            <span>0 $</span>
            <div className="actions">
                <LinkButton
                    background={theme.colors.primary}
                    clickbackground={theme.colors.secondaryLight}
                >
                    MAKE A DEPOSIT &rarr;
                </LinkButton>
                <LinkButton
                    border="#fff"
                    color="#fff"
                >
                    WITHDRAW FUNDS
                </LinkButton>
            </div>
        </BalanceStyled>
    )
}

export default Balance
