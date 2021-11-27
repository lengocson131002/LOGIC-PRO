import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
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
       /* color:  #ffe7bc; */
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
export default GlobalStyle;