import { createTheme } from '@material-ui/core/styles'

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#D9F5FF',
            main: '#DBFB53',
            dark: '#0276aa',
        },
        secondary: {
            main: '#313F4F',
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

export { lightTheme }
