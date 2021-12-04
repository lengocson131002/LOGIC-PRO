import styled from "styled-components";
import bgMobileNavigation from '../../asset/background/cloud_head.png';

const MobileNavigationStyled = styled.div`
    width: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5) url(${bgMobileNavigation}) 50% 50%;
    background-size: cover;
    display: none;
    padding: 2rem 6rem 2rem 6rem;
    max-height:${props => props.close ? "10rem" : "60rem"};
    overflow: hidden;
    transition: all 0.8s;
    box-shadow:3px 5px 15px 2px rgba(0, 0, 0, 0.3);

    & .logo {
        display: flex;
        justify-content: space-between;
        align-items: center;  
    }

    & .nav-top {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 4rem;
        padding: 0 6rem;
    }

    & .nav-bottom {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        & > div {
            display: flex;
            gap: 2rem;
        }

        @media (max-width: 551px) {
            flex-direction: column;
        }
    }

    @media (max-width: 780px) {
        display: block;
    }
`
export default MobileNavigationStyled;