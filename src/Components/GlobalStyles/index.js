import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        font-family: 'Roboto Condensed', sans-serif;
        color: #fff;
        overflow-x: hidden;
        position: relative;
        font-size: 1.6rem;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
`
export default GlobalStyles;