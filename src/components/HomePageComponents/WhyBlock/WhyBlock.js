import React, { useEffect } from 'react';
import WhyBlockStyled from './WhyBlock.styled';
import Container from '../../../UI/Container';
import { AiOutlineWallet } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { BsCoin } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyBlock = () => {
    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, []);
    return (
        <section>
            <Container>
                <WhyBlockStyled data-aos="fade-up">
                    <span>Why choose us?</span>
                    <div>
                        <div className="why-item">
                            <AiOutlineSetting className="why-icon" />
                            <p> 24/7 SUPPORT. Our specialists are available around the clock to help you. Please let us know if you have any questions. We will answer them as quickly as possible!</p>
                        </div>
                        <div className="why-item">
                            <AiOutlineWallet className="why-icon" />
                            <p>DAILY PROFIT. You can make profit every day with our investment proposals!</p>
                        </div>
                        <div className="why-item">
                            <AiOutlineLock className="why-icon" />
                            <p> DEPOSIT PROTECTION. Your deposits are insured by our Special Trust Fund. Your deposits are safe</p>
                        </div>
                        <div className="why-item">
                            <BsCoin className="why-icon" />
                            <p>INVESTING WITHOUT BORDERS. You can invest in our company from anywhere in the world.</p>
                        </div>
                    </div>
                </WhyBlockStyled>
            </Container>
        </section>
    )
}

export default WhyBlock
