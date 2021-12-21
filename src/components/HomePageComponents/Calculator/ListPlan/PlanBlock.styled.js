import styled from "styled-components";
import bgPlan from '../../../../asset/item-background/bgplan.png';

const PlanBlockStyled = styled.div`
    border-radius: 15px;
    padding: ${({ home }) => home ? "4rem 1rem 18rem 1rem" : "4rem 0.5rem"};
    background:${({ home, theme }) => home ? theme.colors.tertiary : theme.colors.background} 
                url(${bgPlan}) no-repeat center bottom;
    text-align: center;
    cursor: pointer;
    flex: 1;


    & .plan-title {
        word-wrap: none;
        font-size: ${({ home }) => home ? "6rem" : "4rem"};
        color: ${props => props.chosen ? props.theme.colors.tertiary : props.theme.colors.secondaryLight}
    }
    & .plan-subtitle {
        font-size: ${({ home }) => home ? "5rem" : "3rem"};
        margin-bottom: 3rem;
        color: ${props => props.chosen ? props.theme.colors.secondary : "#fff"};
    }
    & .plan-text {
        font-size: ${({ home }) => home ? "3.5rem" : "2rem"};
        font-weight: lighter;
        color: ${props => props.chosen ? props.theme.colors.tertiary : props.theme.colors.primaryLight}
    }
    
    &.chosen {
        background:${props => props.theme.colors.primary} url(${bgPlan}) no-repeat center bottom;
        & .plan-title {
             color: ${props => props.theme.colors.tertiary}
        }
        & .plan-subtitle {
            color: ${props => props.theme.colors.secondary};
        }
        & .plan-text {
            color: ${props => props.theme.colors.tertiary}
        }
    }

    @media (max-width: 1200px) {
        & .plan-title {
            font-size: ${({ home }) => home ? "4rem" : "2.8rem"};;
        }
        & .plan-subtitle {
            font-size: ${({ home }) => home ? "3rem" : "2rem"};;
        }
        & .plan-text {
           font-size: ${({ home }) => home ? "2rem" : "1.6rem"};;
        }
    }
    @media (max-width: 1023px) {
        & .plan-title {
            font-size: 4rem;
        }
        & .plan-subtitle {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 780px) {
        padding: 1.5rem;

        & .plan-title {
            font-size: 2.5rem;
        }
        & .plan-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
        & .plan-text {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 576px) {

        padding: 0.5rem;

        & .plan-title {
            font-size: 2rem;
        }
    }
`
export default PlanBlockStyled;