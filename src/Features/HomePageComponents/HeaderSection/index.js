import React from 'react';
import Header from './Header';
import InfoBlock from './InfoBlock';
import styled from 'styled-components';
import Images from '../../../Constants/images';

const HeaderSectionStyled = styled.section`
    background-image: url(${Images.HEADER_BG}) ;
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
