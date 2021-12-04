import styled from 'styled-components';

const InfoCard = styled.div`
    padding:3rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    text-align: center;

    background: rgba(0, 0,0 , 0.3);
    border-radius: 5px;
    outline: 1px solid ${props => props.theme.colors.primary};
    outline-offset: -10px;


    & h4 {
        font-size: 3rem;
    }
    & span {
        font-size: 2rem;
        color: ${props => props.theme.colors.primary}
    }

    @media (max-width: 1200px) {
        & h4{
            font-size: 2.5rem;
        }
        & span {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 1024px) {
        padding: 3rem 1rem;
        flex-direction: column;

       & .status-icon {   
           width: 50px;
       }
    }

    @media (max-width: 768px) {
        padding:2rem 1rem;

        & .status-icon {
            display: none;
        }

        h4 {
            font-size:2rem;
        }
        span {
            font-size: 1.4rem;
        }
    }
  `
export default InfoCard;
