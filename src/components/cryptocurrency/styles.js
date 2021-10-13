import { makeStyles } from '@material-ui/core/styles'

export const useBoxListStyles = makeStyles((theme) => ({
    container: {
        border: '1px solid grey',
        // height: '15rem',
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
}))

export const useFilterStyles = makeStyles((theme) => ({
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
}))

export const useMenuStyles = makeStyles((theme) => ({
    container: {
        padding: 10,
    },
}))
export const useTableStyles = makeStyles((theme) => ({
    tableContainer: {
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            height: '0.6rem',
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#313f4f',
            outline: `1px solid slategrey`,
        },
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        whiteSpace: 'nowrap',
    },
    tableRow: {
        borderBottom: '3px solid #313f4f',
    },
    tableItem: {
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 10px',
        },
    },
}))
