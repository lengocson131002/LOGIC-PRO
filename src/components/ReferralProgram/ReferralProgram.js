import React from 'react';
import Container from '../../UI/Container';
import LinkButton from '../../UI/LinkButton';
import ReferralProgramStyled from './ReferralProgram.styled';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import levelImg from '../../asset/image/pic_4.png';
const ReferralProgram = () => {
    const theme = useTheme();

    return (
        <section>
            <Container>
                <ReferralProgramStyled>
                    <div class="referral-content">
                        <span>REFERRAL PROGRAM</span>
                        <p>The Logic Pro referral program was created as an additional way for our investors to make money. By attracting new investors to join us, our members are getting an additional source of income. The referral program has three levels of participation, with the following percentage accordingly: 5%, 2% and 1%.</p>
                        <LinkButton
                            href="#"
                            className="btn-cta"
                            background={theme.colors.primary}
                            clickbackground="#ffb83d"
                            fontweight="400"
                        >
                            GET START NOW
                            <FaArrowRight style={{
                                marginLeft: '2rem',
                            }} />
                        </LinkButton>
                    </div>
                    <div className="levels">
                        <img src={levelImg} alt="" />
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
