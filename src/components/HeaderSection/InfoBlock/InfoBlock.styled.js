import styled from "styled-components";
import Container from '../../../UI/Container';
import background from '../../../asset/background/pic_1.png';
import LinkButton from "../../../UI/LinkButton";

const InfoBlockStyled = styled(Container)` 
    width: 100%;
    background: url(${background}) no-repeat right top;
    margin-top: 5rem;
    padding-bottom: 5rem;

    @media (max-width: 1023px) {
        background-position: right top;
        background-size: 50% auto;
    }
    @media (max-width: 768px) {
        padding-bottom: 0rem;
    }

    & .info-top {
        padding-top: 10rem;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 7rem;

        /* animation: appear-left 1s ease-out forwards;

        @keyframes appear-left{
            0% {
                opacity: 0;
                transform: translateX(-100%);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        } */

        & h1 {
            display: flex;
            flex-direction: column;
            font-size: 9rem;
            letter-spacing: -5px;
            line-height: 1;

            @media (max-width: 768px) {
               font-size: 7rem;
                letter-spacing: 0px;
            }

            @media (max-width: 576px) {
               font-size: 5rem;
            }

            & span:nth-child(1) {
                color: ${props => props.theme.colors.secondary}
            }
            & span:nth-child(2) {
                color: ${props => props.theme.colors.primary}
            }
        }
        
        & .info-text {
            color: ${props => props.theme.colors.primaryLight};
            font-size: 20px;
            font-weight: lighter;
            
            @media (max-width: 768px) {
               display: none;
            }
        }

       & .btn-cta__icon {
            margin-left: 10px;
        }

    }

    & .actions {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        margin-top: 6rem;
        
        & ${LinkButton}:hover {
            opacity: 0.6;
        }

        @media(max-width: 1024px) {
            margin-top: 2rem;

            & ${LinkButton} {
                font-size: 1.7rem;
            }
        }
        @media(max-width: 576px) {
            flex-direction: column;
            gap: 1rem;
        }
    }



`
export default InfoBlockStyled;