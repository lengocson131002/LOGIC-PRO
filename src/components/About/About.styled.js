import styled from 'styled-components';
import Container from '../../UI/Container';
import LinkButton from '../../UI/LinkButton';

const AboutStyled = styled(Container)`
    display: flex;
    padding: 10rem;
    gap: 10rem;


    & .about-left {
        position: relative;
        width: 50%;
        height: 100%;

        & .about-logo {
            transform: translateX(-30%);
            width: 90rem;
        }

        & .about-info {
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
            right: -8rem;
            bottom: -5rem;
            color: ${props => props.theme.colors.primary};
            width: 40rem;

            & .about-cert {
                width: 20rem;
            }

            & .about-registration {
                width: 50%;
                padding: 2rem 0;
                display: flex;
                flex-direction: column;
                gap: 3rem;
                font-weight: lighter;
                font-size: 1.6rem;

                h2 {
                    font-size: 2rem;
                }
                h4 {
                    font-size: 1.5rem;
                    color: #fff;
                    margin-bottom: 1rem;
                }

            }

        }
    }

    //Style about right
    & .about-right{
        display: flex;
        flex-direction: column;
        gap: 5rem;
        width: 50%;
        color: ${props => props.theme.colors.primaryLight};
        font-weight: lighter;
        letter-spacing: 0px;
        line-height: 1.2;
        font-size: 2rem;
        padding: 0 3rem;

        & h1 {
            font-size: 5rem;
        }
        & ${LinkButton} {
            margin-top: 2rem;
            display: flex; 
            gap: 1rem;
        }

    }
`;
export default AboutStyled;