import { createTheme } from '@material-ui/core/styles'

// Create a theme instance.
const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#D9F5FF',
            main: '#03a9f4',
            dark: '#0276aa',
        },
    },
    typography: {
        fontFamily: ['Prompt', 'sans-serif'].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
})

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#D9F5FF',
            main: '#AF8DCE',
            dark: '#0276aa',
        },
    },
    typography: {
        fontFamily: ['Prompt', 'sans-serif'].join(','),
    },
})

export { lightTheme, darkTheme }
