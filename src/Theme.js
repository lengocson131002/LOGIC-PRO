import { ThemeProvider } from 'styled-components';
const theme = {
    colors: {
        primaryLight: '#ffe7bc',
        primary: '#f1c069',
        secondaryLight: '#ffb83d',
        secondary: '#c28a61',
        tertiary: '#322318',
        background: '#634631',
        body: 'red',
    },
    breakpoints: {

    }
}

const Theme = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}
export default Theme;