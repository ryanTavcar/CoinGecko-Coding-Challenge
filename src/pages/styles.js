import { makeStyles } from '@material-ui/core/styles'

export const useHomeStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#eef2e0',
        // border: '1px solid blue',
    },
    textColor: {
        color: theme.palette.primary.main,
    },
}))

export const useCurrencyStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
    },
    header: {
        // border: '1px solid red',
    },
    chart: {
        // border: '1px solid blue',
    },
    detailsContainer: {
        // border: '1px solid blue',
        height: '100%',
    },
    detailItem: {
        // border: '1px solid red',
        minWidth: '18rem',
        maxHeight: '10rem',
        [theme.breakpoints.down('md')]: {
            maxHeight: '40rem',
            height: '16rem',
        },
    },
}))
