import React, { useEffect } from 'react';
import PayMethodsStyled from './PayMethods.styled';
import Container from '../../../Components/Container';
import Images from '../../../Constants/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PayMethods = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container>
            <PayMethodsStyled data-aos="fade-up">
                <img src={Images.coins.COIN_1} alt="" />
                <img src={Images.coins.COIN_2} alt="" />
                <img src={Images.coins.COIN_3} alt="" />
                <img src={Images.coins.COIN_4} alt="" />
                <img src={Images.coins.COIN_5} alt="" />
                <img src={Images.coins.COIN_6} alt="" />
                <img src={Images.coins.COIN_7} alt="" />
                <img src={Images.coins.COIN_8} alt="" />
                <img src={Images.coins.COIN_9} alt="" />
                <img src={Images.coins.COIN_10} alt="" />
                <img src={Images.coins.COIN_11} alt="" />
            </PayMethodsStyled>
        </Container>
    )
}

export default PayMethods
