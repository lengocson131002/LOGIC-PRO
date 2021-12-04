import React, { useEffect } from 'react'
import InfoBlockStyled from './InfoBlock.styled';
import LinkButton from '../../../UI/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import InfoStatus from './InfoStatus';
import { useTheme } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InfoBlock = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);
    const theme = useTheme();
    return (
        <InfoBlockStyled>
            <div className="info-top" data-aos="fade-right" >
                <h1 className="banner">
                    YOU DREAM IT,
                    <span>WE HELP</span>
                    <span>TO ACHIEVE IT</span>
                </h1>
                <p className="info-text">Your financial well-being comes with LOGIC PRO!</p>
                <LinkButton
                    href="#"
                    className="btn-cta"
                    background={theme.colors.primary}
                    clickbackground="#ffb83d"
                    fweight="bold"
                >
                    GET START NOW
                    <FaArrowRight className="btn-cta__icon" />
                </LinkButton>
            </div>
            <InfoStatus className="info-status" />
            <div className="actions">
                <LinkButton
                    href="#"
                    background={theme.colors.primary}
                    color="#000"
                    fsize="2rem"
                    fweight="bold"
                >Last Investments</LinkButton>
                <LinkButton
                    href="#"
                    color={theme.colors.primary}
                    background={theme.colors.tertiary}
                    fsize="2rem"
                    fweight="bold"
                >Last Withdrawls</LinkButton>
            </div>
        </InfoBlockStyled >
    )
}

export default InfoBlock
