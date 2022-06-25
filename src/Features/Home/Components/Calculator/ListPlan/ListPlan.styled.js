import styled from "styled-components";

const ListPlanStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 3rem;

    @media(max-width: 780px) {
        gap: 1rem;
        padding: 0 1rem;
    }
`;
export default ListPlanStyled;