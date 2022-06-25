import styled from "styled-components";
import PlanBlock from "../../../../Components/PlanBlock";
const ListStyled = styled.div`
    display: flex;
    gap: 1rem;

    @media(max-width: 780px) {
        gap: 1rem;
    }
    @media(max-width: 576px) {
        gap: 0.4rem;
    }
`;

const ListPlan = () => {
    return (
        <ListStyled>
            <PlanBlock
                dailyPercent="2"
                numOfDays="15"
                min="10"
                max="10000" />
            <PlanBlock
                dailyPercent="2.5"
                numOfDays="30"
                min="5000"
                max="50000" />
            <PlanBlock
                dailyPercent="3"
                numOfDays="45"
                min="10000"
                max="100000" />
        </ListStyled>
    )
}

export default ListPlan;
