import React from 'react'
import InfoBlockStyled from './InfoBlock.styled';
import LinkButton from '../../../UI/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import InfoStatus from './InfoStatus';
import { useTheme } from 'styled-components';

const InfoBlock = (props) => {
    const theme = useTheme();
    return (
        <InfoBlockStyled>
            <div className="info-top">
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
                    fontweight="bold"
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
                    fontsize="2rem"
                    fontweight="bold"
                >Last Investments</LinkButton>
                <LinkButton
                    href="#"
                    color={theme.colors.primary}
                    background={theme.colors.tertiary}
                    fontsize="2rem"
                    fontweight="bold"
                >Last Withdrawls</LinkButton>
            </div>
        </InfoBlockStyled >
    )
}

export default InfoBlock
