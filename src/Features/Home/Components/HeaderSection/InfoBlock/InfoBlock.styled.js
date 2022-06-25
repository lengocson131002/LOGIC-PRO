import styled from "styled-components";
import Container from "../../../../../Components/Container";
import Images from "../../../../../Constants/images";
import { LinkButton } from "../../../../../Components/Buttons";

const InfoBlockStyled = styled(Container)` 
    width: 100%;
    background: url(${Images.MAN}) no-repeat right top;
    padding-top: 5rem;
    padding-bottom: 5rem;

    @media (max-width: 1023px) {
        background-position: right top;
        background-size: 50% auto;
    }
    @media (max-width: 768px) {
        background-position: right 5rem;
        padding-bottom: 0rem;
    }

    & .info-top {
        padding-top: 10rem;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        gap: 7rem;

    
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