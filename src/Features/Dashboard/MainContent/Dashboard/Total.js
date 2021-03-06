import styled from "styled-components"
import TotalItem from "./TotalItem"
const TotalWrapper = styled.div`
    width: 50%;
    @media(max-width: 1600px) {
        width: 100%;
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        flex: 1;
      
    }
`;
const Total = () => {
    return (
        <TotalWrapper>
            <TotalItem
                totalName="Active deposits"
                amount="0.00"
            />
            <TotalItem
                totalName="Earned total"
                amount="0.00"
            />
            <TotalItem
                totalName="Total deposits"
                amount="0.00"
            />
            <TotalItem
                totalName="Total withdraw"
                amount="0.00"
            />
        </TotalWrapper>
    )
}

export default Total
