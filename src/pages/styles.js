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
        // padding: 15,
        width: '100%',
        marginBottom: 150,
        marginTop: 100,
        height: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            marginTop: 50,
        },
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
            minHeight: '18rem',
            height: '15rem',
        },
    },
    list: {
        // display: 'flex',
        // flexDirection: 'column',
        padding: 0,
        // border: '1px solid black',
    },
    listItem: {
        display: 'flex',
        height: '3rem',
        padding: 15,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    root: {
        width: '6rem',
        height: '2.5rem',
        // border: '1px solid ' + theme.palette.secondary.main,
    },
    notchedOutline: {
        // border: '1px solid ' + theme.palette.secondary.main + '!important',
    },
    input: {
        height: '2.5rem',
    },
    description: {
        maxHeight: '25rem',
        overflowX: 'auto',
        padding: 10,
        '&::-webkit-scrollbar': {
            width: '0.6rem',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#313f4f',
            outline: `1px solid slategrey`,
        },
    },
}))
