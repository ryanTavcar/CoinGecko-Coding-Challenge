import { makeStyles } from '@material-ui/core/styles'

export const useNavbarStyles = makeStyles((theme) => ({
    navbar: {
        // border: '1px solid red'
        backgroundColor: '#eef2e0',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navlink: {
        color: '#000',
        cursor: 'pointer',
        textDecoration: 'none',
        'a:visited': {
            color: '#000',
        },
    },
    drawerPaper: {
        width: 300,
        background: '#F2F4F5',
    },
    drawerRoot: {
        display: 'flex',
        flexDirection: 'column',
        toolbar: theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    fontColor: {
        color: '#000',
    },
    dividerColor: {
        backgroundColor: '#000',
    },
    menuButton: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    linkContainer: {
        // height: 20,
    },
}))
