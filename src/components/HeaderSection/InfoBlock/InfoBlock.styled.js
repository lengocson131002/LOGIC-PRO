import styled from "styled-components";
import Container from '../../../UI/Container';
import background from '../../../asset/background/pic_1.png';
import LinkButton from "../../../UI/LinkButton";

const InfoBlockStyled = styled(Container)` 
    width: 100%;
    background: url(${background}) no-repeat right top;

    & .info-top {
        padding-top: 10rem;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 7rem;

        animation: appear-left 1s ease-out forwards;

        @keyframes appear-left{
            0% {
                opacity: 0;
                transform: translateX(-100%);
            }
            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

        & h1 {
            display: flex;
            flex-direction: column;
            font-size: 90px;
            letter-spacing: -5px;
            line-height: 1;

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
        }

         & .btn-cta {
            color: #000;
        }

       & .btn-cta__icon {
            margin-left: 10px;
        }

    }


    & .actions {
        display: flex;
        justify-content: center;
        gap: 3rem;
        margin-top: 6rem;
        
        & ${LinkButton}:hover {
            opacity: 0.6;
        }
    }


    @media (max-width: 1023px) {
       & {
        background-position: right top;
        background-size: 50% auto;
       }
    }
`
export default InfoBlockStyled;