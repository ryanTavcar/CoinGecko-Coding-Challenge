import { makeStyles } from '@material-ui/core/styles'

export const useHeroStyles = makeStyles((theme) => ({
    container: {
        width: '100%',
        marginBottom: 150,
        marginTop: 100,
        [theme.breakpoints.down('xs')]: {
            marginTop: 50,
        },
    },
    title: {
        fontFamily: 'Numans',
        letterSpacing: 1,
    },
    subtitle: {
        paddingTop: '3rem',
    },
    textContainer: {
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
    },
    arrowCircle: {
        zIndex: 1,
        position: 'relative',
        top: 70,
        left: 5,
        borderRadius: '50%',
        width: 50,
        height: 50,
        backgroundColor: theme.palette.primary.main,
        display: 'block',
        animation: '$pulse 2s infinite',
    },
    arrowIcon: {
        position: 'relative',
        zIndex: 2,
        cursor: 'pointer',
    },
    '@keyframes pulse': {
        '0%': {
            zIndex: 1,
            backgroundColor: theme.palette.primary.light,
            boxShadow: ' 0 0 0 0 rgba(148, 216, 105, 1)',
        },
        '70%': {
            zIndex: 1,
            boxShadow: ' 0 0 0 10px rgba(148, 216, 105, 0)',
        },
        '100%': {
            zIndex: 1,
            boxShadow: ' 0 0 0 0 rgba(148, 216, 105, 0)',
        },
    },
}))
