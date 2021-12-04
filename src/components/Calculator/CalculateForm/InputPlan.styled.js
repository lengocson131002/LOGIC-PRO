import styled from "styled-components";
const InputPlanStyled = styled.div`
    font-size: 2rem;
    display: flex;
    gap: 6rem;
    
    & .plan-input {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4rem;
 
        @media(max-width: 1024px) {
           .input-range {
                display: none;
            }
        }
        
        & .input {
            display: flex;
            gap: 2rem;
            justify-content: space-between;
            color: #fff;

            @media(max-width: 1200px) {
                flex-direction: column;
            }
            
            & h4 {
                font-size: 2.4rem;
                color: ${props => props.theme.colors.secondary};
            }
            
            & .plans {
                display: flex;
                justify-content:start;
                align-items: center;
                gap: 1rem;

                & div {
                    background-color: ${props => props.theme.colors.secondary};
                    padding: 1rem 1.5rem;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 2rem;
                    font-weight: normal;
                    cursor: pointer;
                }

                & div.chosen {
                    background-color: ${props => props.theme.colors.primary};
                    color: ${props => props.theme.colors.tertiary};
                }
            }

            & input{
                outline: none;
                border: none;
                padding: 2rem 4rem 2rem 2rem;
                border-radius: 5px;
                color: #fff;
                font-size: 1.6rem;
                width: 100%;
                background: ${props => props.theme.colors.tertiary};
              
            }
            & .input-amount {
                position: relative;

                & p {
                    position: absolute;
                    height: 100%;
                    top: 0;
                    right: 0;
                    background: ${props => props.theme.colors.tertiary};
                    vertical-align: middle;
                    line-height: 1;
                    padding: 2rem;
                    color: #fff;
                    font-weight: bold;
                    border-radius: 5px;
                    z-index: 1;
                }
            }
        }
    }
    & .plan-values {
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 2rem;
        min-width: 30%;

        @media(max-width: 768px) {
            align-items: start;
         }

        & .plan-value {
            & h4 {
                font-size: 1.6rem;
                margin-bottom: .5rem;
                color: ${props => props.theme.colors.secondary};
            }

            & div { 
                font-size: 3.5rem;
                margin-bottom: .5rem;
                color: ${props => props.theme.colors.tertiary};

                @media (max-width: 768px) {
                    font-size: 3rem;
                }

                & span {
                    font-size: 2rem;
                    margin-left: 1rem;
                }
            }


        }

    }

    @media(max-width: 768px) {
        flex-direction: column;
        gap: 3rem;
    }
     
`;

export default InputPlanStyled;
