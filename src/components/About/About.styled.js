import styled from 'styled-components';
import LinkButton from '../../UI/LinkButton';

const AboutStyled = styled.div`
    display: flex;
    padding: 5rem 0;

    & .about-left {
        display: flex;
        align-items: start;
        justify-content: end;
        gap: 3rem;
        color: ${props => props.theme.colors.primary};
        width: 50%;
        padding: 2rem 5rem;



        & .about-registration {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 3rem;
            font-weight: lighter;
            font-size: 1.7rem;

            h2 {
                font-size: 2.4rem;
            }
            h4 {
                font-size: 2rem;
                color: #fff;
                margin-bottom: 1rem;
            }

        }

    }


    //Style about right
    & .about-right{
        width: 50%;
        color: ${props => props.theme.colors.primaryLight};
        font-weight: lighter;
        letter-spacing: 0px;
        line-height: 1.2;
        font-size: 2rem;
        padding: 0 4rem;

        & h1 {
            font-size: 5rem;
            margin-bottom: 2rem;
        }
        & ${LinkButton} {
            margin-top: 4rem;
            display: flex; 
            gap: 1rem;
        }

    }

    @media(max-width: 1024px) {
        flex-direction: column;
        gap:3rem;
        padding: 5rem 0;

        .about-left {
            width: 100%;
            justify-content: center; 
            
            .about-registration {
                font-size: 1.4rem;
                h2 {
                    font-size: 2rem;
                }

                h4 {
                    font-size: 1.7rem;
                }
             }
        }
        .about-right {
            width: 100%;
            font-size: 1.7rem;
            padding: 0 2rem;

            h1 {
                font-size: 4rem;
            }

        }


    
    }
`;
export default AboutStyled;