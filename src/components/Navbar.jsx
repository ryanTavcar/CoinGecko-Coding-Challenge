import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

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
  } from '@material-ui/core'

const menuItems = [
    {
        text: 'Home',
        pathname: '/'
    },
    {
        text: 'About',
        pathname: '/about'
    },
    {
        text: 'Crypto',
        pathname: '/cryptocurrencies'
    },
];

const useStyles = makeStyles(theme =>({
    appbar: {
        height: "100vh",
        // border: '1px solid red'
    },
    navbar: {
        // display: 'flex',
        // flexDirection: 'column',
        // height: "100%",
        // width: '20%'
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
    drawer: {
        // border: '1px solid red'
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
        height: 20,
    }
}))

const Navbar = ({lightOrDark, handleLightOrDark}) => {

    const classes = useStyles();
    const drawer = Sidebar();
    const [mobileOpen, setMobileOpen] = useState(false)
    const [container, setContainer] = useState(null)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    
    return (
        <AppBar position="static" color="default" className={classes.appbar}>
            <Toolbar className={classes.navbar}>
                <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={handleDrawerToggle} >
                    <MenuIcon />
                </IconButton>

                <Grid container direction="column" justifyContent="center" className={classes.drawer} >
                    {/* mobile */}
                    <Hidden mdUp >
                        <Grid container direction="row" justifyContent="flex-end">
                            <Grid item md={4} className={classes.linkContainer}>
                                <Grid container direction="row" justifyContent="flex-end" >
                                    <Button size="small" onClick={() => handleLightOrDark()}>
                                        {lightOrDark}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Drawer
                            container={container}
                            variant='temporary'
                            anchor='left'
                            classes={{ paper: classes.drawerPaper }}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{keepMounted: true}}>
                            {drawer}
                        </Drawer>
                    </Hidden>

                    {/* tablet, laptop, desktop */}
                    <Hidden smDown >
                        <Grid item md={3} className={classes.linkContainer}>
                            <Link to='/'>
                                <Typography style={{fontFamily: 'Bungee', letterSpacing: 1, cursor: 'pointer', width: 'fit-content'}}>
                                    <b>CryptoGrab</b>
                                </Typography>
                            </Link>
                            {/* <Image src='/images/simflight_logo_transparent_1.png' width='100' height='32' /> */}
                        </Grid>
                        <Grid item md={6} className={classes.linkContainer}>
                            <Grid container direction="row" alignItems="center" justifyContent="space-evenly">
                                {menuItems.map(item => (
                                    <Grid item key={item.text}>
                                        <Link to={item.pathname} className={classes.navlink}>
                                            <Typography color="textPrimary" style={{cursor: 'pointer'}}>
                                                {item.text}
                                            </Typography>
                                        </Link>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                            <Grid item md={3} className={classes.linkContainer}>
                                <Grid container direction="row" justifyContent="flex-end" >
                                    <Button size="small" onClick={() => handleLightOrDark()}>
                                        {lightOrDark}
                                    </Button>
                                </Grid>
                            </Grid>
                    </Hidden>

                </Grid>

            </Toolbar>
        </AppBar>
    );
};

const Sidebar = () => {
    const classes = useStyles();

    return (
        <Box margin='8rem 1rem 0 1rem'>
            <div className={classes.toolbar} >
                <Typography style={{fontFamily: 'Bungee', letterSpacing: 1}}>
                    <b>Simflight</b>
                </Typography>
                <Divider className={classes.dividerColor} />
                <Box marginTop='2rem'>
                    <List>
                        {menuItems.map((item) => {
                            return (
                                <ListItem
                                button
                                component={'a'}
                                to={item.pathname}
                                key={item.text}
                                >
                                    <ListItemIcon className={classes.fontColor}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        className={classes.fontColor}
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

export default Navbar;

