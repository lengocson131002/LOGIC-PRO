import React from 'react';
import styled from 'styled-components';

const BalanceStyled = styled.div`
    text-align: center;

    & h4 {
        font-size: 1.9rem;
        font-weight: 400;
    }

    & span {
        font-weight: bold;
        font-size: 3.5rem;
        color: ${props => props.theme.colors.warning};
    }
`;

const Balance = () => {
    return (
        <BalanceStyled>
            <h4>YOUR BALLANCE: </h4>
            <span>13 $</span>
        </BalanceStyled>
    )
}

export default Balance
