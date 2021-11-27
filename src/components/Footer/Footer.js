import React from 'react';
import Container from '../../UI/Container';
import FooterStyled from './Footer.styled';

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
                <FooterStyled></FooterStyled>
            </Container>
        </footer >
    )
}

export default Footer
