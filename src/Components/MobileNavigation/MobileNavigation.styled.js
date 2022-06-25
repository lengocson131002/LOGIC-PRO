import styled from "styled-components";
import bgMobileNavigation from '../../asset/background/cloud_head.png';

const MobileNavigationStyled = styled.div`
    width: 100%;
    z-index: 999;
    position:${({ sticky }) => sticky ? 'sticky' : 'relative'};
    top: 0;
    left:0;
    background: rgba(0, 0, 0, 0.8) url(${bgMobileNavigation}) 50% 50%;
    background-size: cover;
    display: none;
    overflow: hidden;
    box-shadow:0px 2px 10px 2px rgba(0, 0, 0, 0.3);

    

    & .logo {
        display: flex;
        justify-content: space-between;
        align-items: center; 
        padding: 1rem 4rem;
        
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

    @media (max-width: ${({ breakpoint }) => breakpoint}) {
        display: block;
    }
`
export default MobileNavigationStyled;