import React, { useEffect } from 'react';
import Container from '../../UI/Container';
import FooterStyled from './Footer.styled';
import FooterLink from './FooterLink';
import logo from '../../asset/logo/logo-top.png';
import ListContact from '../Contacts/ListContact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <footer style={
            {
                background: 'rgba(0, 0,0, 0.5)',
                borderTopRightRadius: '5rem',
                borderTopLeftRadius: '5rem',
                marginTop: '5rem',
            }
        }>
            <Container>
                <FooterStyled>
                    <div className="footer-logo" data-aos="fade-right">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                        <p>
                            © 2020 - 2021 LogicPro Group Ltd <br /> All Right Reserved.
                        </p>
                    </div>
                    <div className="footer-right" data-aos="fade-left">
                        <div className="footer-links">
                            <FooterLink name="Home" to="#"></FooterLink>
                            <FooterLink name="Referral Program" to="#"></FooterLink>
                            <FooterLink name="About us" to="#"></FooterLink>
                            <FooterLink name="Faq" to="#"></FooterLink>
                            <FooterLink name="Investment" to="#"></FooterLink>
                            <FooterLink name="Help" to="#"></FooterLink>
                        </div>
                        <div className="footer-contact">
                            <div>
                                <span>ADDRESS</span>
                                <p>64 Victoria Street, London,
                                    SW1E 6QP, United Kingdom
                                </p>
                            </div>
                            <div>
                                <span>TELEPHONE</span>
                                <p>8:00 AM - 11:30 PM UTC</p>
                                <a href="tel:+442045770371">+44 20 4577 0371</a>
                            </div>
                        </div>
                        <ListContact direction="column" />
                    </div>
                </FooterStyled>
            </Container>
        </footer >
    )
}

export default Footer
