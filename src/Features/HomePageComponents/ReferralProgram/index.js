import React, { useEffect } from 'react';
import Container from '../../../Components/Container';
import { LinkButton } from '../../../Components/Buttons';
import ReferralProgramStyled from './ReferralProgram.styled';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import Images from '../../../Constants/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReferralProgram = () => {
    const theme = useTheme();
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);
    return (
        <section id="referral">
            <Container>
                <ReferralProgramStyled>
                    <div className="referral-content" data-aos="fade-right">
                        <span>REFERRAL PROGRAM</span>
                        <p>The Logic Pro referral program was created as an additional way for our investors to make money. By attracting new investors to join us, our members are getting an additional source of income. The referral program has three levels of participation, with the following percentage accordingly: 5%, 2% and 1%.</p>
                        <LinkButton
                            href="#"
                            className="btn-cta"
                            background={theme.colors.primary}
                            clickbackground="#ffb83d"
                            fweight="400"
                        >
                            GET START NOW
                            <FaArrowRight style={{
                                marginLeft: '2rem',
                            }} />
                        </LinkButton>
                    </div>
                    <div className="levels" data-aos="fade-left">
                        <img src={Images.LEVEL_IMG} alt="" />
                        <div className="level-item level-1">
                            <span>5%</span>
                            <p>1 LEVEL</p>
                        </div>
                        <div className="level-item level-2">
                            <span>2%</span>
                            <p>2 LEVEL</p>
                        </div>
                        <div className="level-item level-3">
                            <span>1%</span>
                            <p>3 LEVEL</p>
                        </div>
                    </div>
                </ReferralProgramStyled>
            </Container>
        </section>
    )
}

export default ReferralProgram
