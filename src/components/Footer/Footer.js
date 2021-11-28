import React from 'react';
import Container from '../../UI/Container';
import FooterStyled from './Footer.styled';
import FooterLink from './FooterLink';
import logo from '../../asset/logo/logo-top.png';
import ListContact from '../Contacts/ListContact';

const Footer = () => {
    return (
        <footer style={
            {
                background: 'rgba(0, 0,0, 0.5)',
                borderTopRightRadius: '10rem',
                borderTopLeftRadius: '10rem',
                marginTop: '5rem',
            }
        }>
            <Container>
                <FooterStyled>
                    <div className="footer-logo">
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                        <p>
                            © 2020 - 2021 LogicPro Group Ltd <br /> All Right Reserved.
                        </p>
                    </div>
                    <div className="footer-links">
                        <FooterLink link="Home" to="#"></FooterLink>
                        <FooterLink link="Referral Program" to="#"></FooterLink>
                        <FooterLink link="About us" to="#"></FooterLink>
                        <FooterLink link="Faq" to="#"></FooterLink>
                        <FooterLink link="Investment" to="#"></FooterLink>
                        <FooterLink link="Help" to="#"></FooterLink>
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
                </FooterStyled>
            </Container>
        </footer >
    )
}

export default Footer
