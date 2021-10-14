import { makeStyles } from '@material-ui/core/styles'

export const useNavbarStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#eef2e0',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        // border: '1px solid red',
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
        display: 'flex',
        alignItems: 'center',
        height: '62px',
    },
    navlink: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        'a:visited': {
            color: '#000',
        },
    },
    link: {
        letterSpacing: 0.5,
    },
}))
