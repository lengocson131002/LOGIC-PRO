import styled from "styled-components";
const ContentHeader = styled.h3`
    text-transform: uppercase;
    font-size: 5rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    margin-bottom: 3rem;

    @media (max-width: 1024px) {
        font-size: 4rem;
    }
`;
export default ContentHeader;