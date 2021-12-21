import styled from "styled-components";

const ReferralProgramStyled = styled.div`
    display: flex;
    padding: 5rem 0 ;
    gap: 2rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    & .referral-content {
        padding: 0 5rem;

        @media(max-width: 1024px) {
            padding: 0 2rem;
        }

        & span {
            display: block;
            font-size: 5rem;
            font-weight: 400;
            color: ${props => props.theme.colors.secondaryLight};
            margin-bottom: 3rem;
            @media(max-width: 1024px) {
                font-size: 4rem;
            }
            @media(max-width: 768px) {
                font-size: 3rem;
            }

        }
        
        & p {
            font-size: 2rem;
            font-weight: lighter;
            letter-spacing: .5px;
            color: ${props => props.theme.colors.primaryLight};
            margin-bottom: 4rem;
            line-height: 1.4;
            
        }
    }

    & .levels {
        position: relative;
        min-width: 50%;
        margin-top: 8rem;

        
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
            top: -18%;
            left: 10%;
            @media(max-width: 1024px) {
                top: -14%;
            }
           
            span {
                font-size: 7rem;
                @media(max-width: 768px) {
                    font-size: 5rem;
                }
            }
            p {
                font-size: 1.7rem;
            }

        
          
        }
        & .level-2 {
            top: 15%;
            left: 47%;
            span {
                font-size: 5rem;
                @media(max-width: 768px) {
                    font-size: 4rem;
                }
            }
            p {
                font-size: 1.7rem;
            }
           
        }
        & .level-3 {
            top: 12%;
            right: 12%;
            span {
                font-size: 3rem;
                @media(max-width: 768px) {
                    font-size: 2rem;
                }
            }
            p {
                font-size: 1.7rem;
            }
        }
    }

`;

export default ReferralProgramStyled;