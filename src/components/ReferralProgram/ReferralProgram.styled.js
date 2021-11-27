import styled from "styled-components";

const ReferralProgramStyled = styled.div`
    display: flex;
    padding: 5rem 0;
    
    & div {
        width: 50%;
    }

    & .referral-content {
        padding: 0 10rem;

        & span {
            display: block;
            font-size: 5rem;
            font-weight: 400;
            color: ${props => props.theme.colors.secondaryLight};
            margin-bottom: 7rem;
        }
        & p {
            font-size: 2rem;
            font-weight: lighter;
            letter-spacing: .5px;
            color: ${props => props.theme.colors.primaryLight};
            margin-bottom: 7rem;
            line-height: 1.4;
            
        }
    }

    & .levels {
        position: relative;
        
        & .level-item {
            position: absolute;
            z-index: 1;
            width: fit-content;

            & span {
               color: ${props => props.theme.colors.secondaryLight};
            }
            & p {
                 color: ${props => props.theme.colors.primaryLight};
            }
        }

        & .level-1 {
            top: -7rem;
            left: 7.5rem;
            span {
                font-size: 7rem;
            }
            p {
                font-size: 1.7rem;
            }
        }
        & .level-2 {
            top: 8rem;
            left: 33.5rem;
            span {
                font-size: 5rem;
            }
            p {
                font-size: 1.7rem;
            }
        }
        & .level-3 {
            top: 9rem;
            right: 9rem;
            span {
                font-size: 3rem;
            }
            p {
                font-size: 1.7rem;
            }
        }
    }
`;

export default ReferralProgramStyled;