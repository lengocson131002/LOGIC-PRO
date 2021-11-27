import React from 'react';
import styled from 'styled-components';
import InfoCard from './InfoCard.styled';

const InfoStatusStyled = styled.div`    
    display: grid;
    grid-template-columns: auto auto auto;
    row-gap: 2rem;
    column-gap: 1rem;
    margin-top: 12rem;

    & ${InfoCard}:nth-child(1) h4 {
       font-size: 3rem;
    }
    & ${InfoCard}:nth-child(4) h4 {
       font-size: 3rem;
    }

    & ${InfoCard}:nth-child(5) h4 {
       font-size: 3rem;
    }
    @media (max-width: 1023px) {
        margin-top: 2rem;
    }

`;

export default InfoStatusStyled;