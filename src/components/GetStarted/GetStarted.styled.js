import styled from "styled-components";
import howBg from '../../asset/item-background/howbg.png';

const GetStartedStyled = styled.div`
    padding: 8rem 0;
    width: 100%;
    margin: 0 auto;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.primary};

  
    & > div{ 
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-around;
    margin-top: 6rem;
   }

    &>p {
        text-align: center;
        font-size: 5rem;
        color: ${props => props.theme.colors.primary};
    }

    & .step-block  {
        background: url(${howBg});
        background-repeat: no-repeat;
        min-width: 320px;
        min-height: 320px;
    }

    & .step-content {
        padding:3rem 9rem;

        & .step-header {
            font-size: 6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;

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
                font-size: 1.8rem;
                font-weight: lighter;
            }
        }
    }
    
`;
export default GetStartedStyled;