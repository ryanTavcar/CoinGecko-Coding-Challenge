import { createTheme } from '@material-ui/core/styles'

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#b6d7a8',
            main: '#DBFB53',
            dark: '#5a8643',
        },
        secondary: {
            main: '#313F4F',
        },
    },
    typography: {
        fontFamily: ['Prompt', 'sans-serif'].join(','),
    },
})

export { lightTheme }
