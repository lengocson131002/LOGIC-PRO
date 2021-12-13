import React, { useEffect } from 'react';
import PayMethodsStyled from './PayMethods.styled';
import Container from "../../../UI/Container";


import pay1 from '../../../asset/pay/pay_1.png';
import pay2 from '../../../asset/pay/pay_2.png';
import pay3 from '../../../asset/pay/pay_3.png';
import pay4 from '../../../asset/pay/pay_4.png';
import pay5 from '../../../asset/pay/pay_5.png';
import pay6 from '../../../asset/pay/pay_6.png';
import pay7 from '../../../asset/pay/pay_7.png';
import pay8 from '../../../asset/pay/pay_8.png';
import pay9 from '../../../asset/pay/pay_9.png';
import pay10 from '../../../asset/pay/pay_10.png';
import pay11 from '../../../asset/pay/pay_11.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PayMethods = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container>
            <PayMethodsStyled data-aos="fade-up">
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
                <img src={pay5} alt="" />
                <img src={pay6} alt="" />
                <img src={pay7} alt="" />
                <img src={pay8} alt="" />
                <img src={pay9} alt="" />
                <img src={pay10} alt="" />
                <img src={pay11} alt="" />
            </PayMethodsStyled>
        </Container>
    )
}

export default PayMethods
