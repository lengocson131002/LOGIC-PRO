import React from 'react';
import Header from './Header/Header';
import InfoBlock from './InfoBlock/InfoBlock';
import styled from 'styled-components';
import background from '../../../asset/background/cloud_head.png';

const HeaderSectionStyled = styled.section`
    background-image: url(${background}) ;
    background-repeat: no-repeat;
    background-size: cover;

`
const HeaderSection = () => {
    return (
        <HeaderSectionStyled>
            <Header />
            <InfoBlock />
        </HeaderSectionStyled>
    )
}
export default HeaderSection
