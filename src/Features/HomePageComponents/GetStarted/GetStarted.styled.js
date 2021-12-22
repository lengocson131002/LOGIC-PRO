import styled from "styled-components";
import howBg from '../../../asset/item-background/howbg.png';

const GetStartedStyled = styled.div`
    padding: 5rem 0;
    width: 100%;
    margin: 0 auto;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.primary};

  
    & > div{ 
        display: grid;
        grid-template-columns: repeat(4, auto);
        justify-content: space-around;
        margin-top: 6rem;

        @media (max-width: 1200px)  {
            grid-template-columns: repeat(2, auto);
            justify-content: center;
            row-gap: 1rem;
        }

        @media (max-width: 1200px)  {
            column-gap: 5rem;
        }
        @media (max-width: 700px)  {
            column-gap: 2rem;
        }

   }

    &>p {
        text-align: center;
        font-size: 5rem;
        color: ${props => props.theme.colors.primary};

        @media (max-width: 768px) {
            font-size: 4rem;
        }
    }

    & .step-block  {
        background: url(${howBg});
        background-repeat: no-repeat;
        background-size: contain;
        width: 300px;
        height: 300px;

        & .step-content {
            padding: 1rem 6.5rem 1rem 8.5rem;
            width: 100%;
            height: 100%;
    
            & .step-header {
                font-size: 8rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 2rem;
    
                & .step-icon {
                   color: ${props => props.theme.colors.primary};
                   fill: ${props => props.theme.colors.primary};
                }
    
                & > span {
                    font-weight: lighter;
                    color: ${props => props.theme.colors.secondaryLight};
                }
                
            }
    
            & .step-body {
                & span {
                    display: block;
                    font-size: 2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    color: #fff;
                }
                & p {
                    font-size: 1.6rem;
                    font-weight: lighter;
                }
            }
        }
        @media (max-width: 700px)  {
            background: ${props => props.theme.colors.tertiary};
            width: auto;
            height: auto;
            border-radius: 5px;

            & .step-content {
                padding: 2rem;

                & .step-header {
                    font-size: 4rem;
                }
            }
        }
    }


    
`;
export default GetStartedStyled;