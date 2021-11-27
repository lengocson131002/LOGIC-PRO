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
        
        & .input {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            
            & h4 {
                font-size: 3rem;
                color: ${props => props.theme.colors.secondary};
            }
            
            & .plans {
                display: flex;
                justify-content: space-between;
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
            }

            & input{
                outline: none;
                border: none;
                padding: 2rem 4rem 2rem 2rem;
                border-radius: 5px;
                color: #fff;
                font-size: 1.6rem;
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
        gap: 2rem;

        & .plan-value {
            & h4 {
                font-size: 1.6rem;
                margin-bottom: .5rem;
                color: ${props => props.theme.colors.secondary};
            }

            & div { 
                text-align: right;
                font-size: 3.5rem;
                margin-bottom: .5rem;
                color: ${props => props.theme.colors.tertiary};

                & span {
                    font-size: 2rem;
                    margin-left: 1rem;
                }
            }


        }

    }
     
`;

export default InputPlanStyled;
