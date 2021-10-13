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
}))
