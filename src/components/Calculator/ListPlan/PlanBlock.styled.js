import styled from "styled-components";
import bgPlan from '../../../asset/item-background/bgplan.png';

const PlanBlockStyled = styled.div`
    border-radius: 15px;
    width: calc(100%/3 - 60px);
    padding: 6rem 0 18rem 0;
    background:${props => props.theme.colors.tertiary} url(${bgPlan}) no-repeat center bottom;
    text-align: center;
    cursor: pointer;

    & .plan-title {
        font-size: 7rem;
        color: ${props => props.theme.colors.secondaryLight}
    }
    & .plan-subtitle {
        font-size: 4rem;
        margin-bottom: 3rem;
    }
    & .plan-text {
        font-size: 3.5rem;
        font-weight: lighter;
        color: ${props => props.theme.colors.primaryLight}
    }
`

export default PlanBlockStyled;