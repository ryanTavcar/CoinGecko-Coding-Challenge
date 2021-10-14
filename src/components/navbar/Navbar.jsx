// REACT
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// MATERIAL-UI
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
import MenuIcon from '@material-ui/icons/Menu'

// OTHER
import { useGeneralState } from '../../state/zustand'
import { useNavbarStyles } from './styles'
import menuItems from './navbarLinks'

const Navbar = () => {
    const styles = useNavbarStyles()
    const drawer = Sidebar()
    const { setIsModalOpen } = useGeneralState()
    const [mobileOpen, setMobileOpen] = useState(false)
    const [container, setContainer] = useState(null)

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
                        ></Grid>
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
                            <NavLink to="/" className={styles.navlink}>
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
                            </NavLink>
                        </Grid>
                        <Grid
                            item
                            md={3}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            className={styles.linkContainer}
                        >
                            {menuItems.map((item) => (
                                <Grid
                                    item
                                    key={item.text}
                                    style={{
                                        marginLeft: 15,
                                        marginRight: 15,
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <NavLink
                                        to={item.pathname}
                                        exact={true}
                                        className={styles.navlink}
                                        activeClassName="isActive"
                                    >
                                        <Typography
                                            color="textPrimary"
                                            className={styles.link}
                                        >
                                            {item.text}
                                        </Typography>
                                    </NavLink>
                                </Grid>
                            ))}
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
    const styles = useNavbarStyles()

    return (
        <Box margin="8rem 1rem 0 1rem">
            <div className={styles.toolbar}>
                <Typography style={{ fontFamily: 'Bungee', letterSpacing: 1 }}>
                    <b>Cryptograb</b>
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
