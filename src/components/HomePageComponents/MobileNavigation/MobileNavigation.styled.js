import styled from "styled-components";
import bgMobileNavigation from '../../../asset/background/cloud_head.png';

const MobileNavigationStyled = styled.div`
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5) url(${bgMobileNavigation}) 50% 50%;
    background-size: cover;
    display: none;
    overflow: hidden;
    box-shadow:3px 3px 15px 2px rgba(0, 0, 0, 0.3);

    & .logo {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 2rem 4rem;
        
        @media (max-width: 576px) {
            img {
                width: 12rem;;
            }
        }
    }

    & .nav {    
        transition: all 0.8s;
        height: fit-content;
        max-height:${props => props.close ? "0" : "60rem"};
       
        & .nav-top {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 2rem 6rem;
         }

        & .nav-bottom {
            margin:3rem 0;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;

            & > div {
                display: flex;
                gap: 2rem;
            }

            @media (max-width: 576px) {
                flex-direction: column;
            }
        }                           
    }

    @media (max-width: 780px) {
        display: block;
    }
`
export default MobileNavigationStyled;