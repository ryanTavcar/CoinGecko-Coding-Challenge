import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import { useGeneralState } from '../state/zustand'
import {
    Box,
    Drawer,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Hidden,
    Toolbar,
    IconButton,
    Grid,
    Button,
    AppBar,
    Modal,
} from '@material-ui/core'

const menuItems = [
    {
        text: 'Cyrptocurrencies',
        pathname: '/',
    },
    {
        text: 'About',
        pathname: '/about',
    },
    // {
    //     text: 'Social',
    //     pathname: '/social',
    // },
]

const useStyles = makeStyles((theme) => ({
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

const Navbar = () => {
    const styles = useStyles()
    const drawer = Sidebar()
    const { setIsModalOpen } = useGeneralState()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [container, setContainer] = useState(null)
    const [isOpen, setisOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const handleModalOpen = () => setIsModalOpen()

    return (
        <AppBar position="sticky" color="default">
            <Toolbar className={styles.navbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={styles.menuButton}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>

                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={styles.drawer}
                >
                    {/* mobile */}
                    <Hidden mdUp>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                        >
                            {/* <Grid item md={4} className={styles.linkContainer}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                >
                                    <Button
                                        size="small"
                                        onClick={() => handleLightOrDark()}
                                    >
                                        {lightOrDark}
                                    </Button>
                                </Grid>
                            </Grid> */}
                        </Grid>
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor="left"
                            classes={{ paper: styles.drawerPaper }}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{ keepMounted: true }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>

                    {/* tablet, laptop, desktop */}
                    <Hidden smDown>
                        <Grid item md={2} className={styles.linkContainer}>
                            <Link to="/" className={styles.navlink}>
                                <Typography
                                    color="textPrimary"
                                    style={{
                                        fontFamily: 'Bungee',
                                        letterSpacing: 1,
                                        cursor: 'pointer',
                                        width: 'fit-content',
                                    }}
                                >
                                    <b>Cryptograb</b>
                                </Typography>
                            </Link>
                            {/* <Image src='/images/simflight_logo_transparent_1.png' width='100' height='32' /> */}
                        </Grid>
                        <Grid item md={3} className={styles.linkContainer}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                            >
                                {menuItems.map((item) => (
                                    <Grid
                                        item
                                        key={item.text}
                                        style={{
                                            marginLeft: 15,
                                            marginRight: 15,
                                        }}
                                    >
                                        <Link
                                            to={item.pathname}
                                            className={styles.navlink}
                                        >
                                            <Typography
                                                color="textPrimary"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item md={2} className={styles.linkContainer}>
                            <Grid container justifyContent="space-evenly">
                                <Grid item>
                                    <Link
                                        to="/"
                                        className={styles.navlink}
                                        onClick={handleModalOpen}
                                    >
                                        <Typography
                                            color="textPrimary"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Login
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="/"
                                        className={styles.navlink}
                                        onClick={handleModalOpen}
                                    >
                                        <Typography
                                            color="textPrimary"
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <b>Registation</b>
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

const Sidebar = () => {
    const styles = useStyles()

    return (
        <Box margin="8rem 1rem 0 1rem">
            <div className={styles.toolbar}>
                <Typography style={{ fontFamily: 'Bungee', letterSpacing: 1 }}>
                    <b>Simflight</b>
                </Typography>
                <Divider className={styles.dividerColor} />
                <Box marginTop="2rem">
                    <List>
                        {menuItems.map((item) => {
                            return (
                                <ListItem
                                    button
                                    component={'a'}
                                    to={item.pathname}
                                    key={item.text}
                                >
                                    <ListItemIcon className={styles.fontColor}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        className={styles.fontColor}
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </div>
        </Box>
    )
}

export default Navbar
