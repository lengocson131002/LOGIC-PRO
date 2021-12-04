import React, { useEffect } from 'react';
import AboutStyled from './About.styled';
import LinkButton from '../../UI/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import cert from '../../asset/image/certificate.jpg';
import { useTheme } from 'styled-components';
import Container from '../../UI/Container';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    const theme = useTheme();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id="about">
            <Container>
                <AboutStyled>
                    <div className="about-left" data-aos="fade-right">
                        <div className="about-cert">
                            <img src={cert} alt="logic-pro certificate" />
                        </div>
                        <div className="about-registration">
                            <h2>OFFICIAL REGISTRATION: </h2>
                            <div>
                                <h4>LOGICPRO GROUP LTD</h4>
                                <p>64 Victoria Street, London, SW1E 6QP, United Kingdom</p>
                            </div>
                            <div>
                                <h4>REGISTRATION NUMBER </h4>
                                <b>13526593</b>
                                <p>(ex.11429908)</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-right" data-aos="fade-left">
                        <h1>ABOUT LOGIC PRO</h1>
                        <p>Logic Pro opens up a huge world of cryptocurrency trading for its clients. The company provides a unique opportunity to start earning a great income without delving into details of the world of crypto-trading.</p>
                        <p>Logic Pro started its successful activity in the beginning of 2019. In a short period of time we were able to increase a Statement of capital to 7 million USD, and promptly became one of the most successful players in the cryptocurrency world, with a current turnover of more than 50 million USD. The company employs a coordinated experienced team of analysts and traders who work to accumulate profit and increase trading turnovers as quickly and efficiently as possible, reducing risks and losses to a minimum.</p>
                        <LinkButton
                            background={theme.colors.primary}
                            clickbackground={theme.colors.secondaryLight}
                            fsize="2rem"
                        >Read more <FaArrowRight /> </LinkButton>
                    </div>
                </AboutStyled>
            </Container>
        </section>
    )
}

export default About;
