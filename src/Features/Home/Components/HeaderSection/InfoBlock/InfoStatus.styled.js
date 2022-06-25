import styled from 'styled-components';
import InfoCard from './InfoCard.styled';

const InfoStatusStyled = styled.div`    
    display: grid;
    grid-template-columns: 32% 32% 32%;
    row-gap: 2rem;
    column-gap: 1rem;
    margin-top: 12rem;

    @media (max-width: 1023px) {
        margin-top: 2rem;
    }
    @media (max-width: 768px) {
        row-gap: 1rem;
        column-gap: 0.5rem;
    }

         @media (max-width: 768px) {
            & ${InfoCard}:nth-child(1) h4 {
            font-size: 2rem;
         }
         
         & ${InfoCard}:nth-child(4) h4 {
            font-size: 2rem;
         }
         & ${InfoCard}:nth-child(5) h4 {
            font-size: 2rem;
         }
    }


`;

export default InfoStatusStyled;