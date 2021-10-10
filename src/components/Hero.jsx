import { useMediaQuery } from '@material-ui/core'
import Link from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import { BiRightArrowAlt } from 'react-icons/bi'
import heroImage from '../images/helicopter-feature.png'

const useStyles = makeStyles((theme) => ({
    container: {
        // minHeight: 'calc(100vh - 170px)',
        // border: '1px solid red',
        width: '100%',
        marginBottom: 150,
        marginTop: 100,
        // [theme.breakpoints.between('sm', 'md')]: {
        //     minHeight: 0,
        // }
    },
    title: {
        fontFamily: 'Bungee',
        letterSpacing: 1,
    },
    subtitle: {},
    textContainer: {
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
    },
}))

const Hero = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    return (
        <Grid
            component="main"
            container
            className={classes.container}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} md={6}>
                <Grid
                    container
                    direction="column"
                    alignItems={isMobile ? 'center' : 'flex-start'}
                    spacing={5}
                    className={classes.textContainer}
                >
                    <Grid item component="header">
                        <Typography
                            className={classes.title}
                            variant={isMobile ? 'h3' : 'h1'}
                            component="h1"
                        >
                            <b>Welcome to Crytograb</b>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            className={classes.subtitle}
                            variant="subtitle2"
                            component="h1"
                        >
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore.
                        </Typography>
                    </Grid>
                    {/* <Grid item >
                        <Grid container direction="row" justifyContent={isMobile ? 'center' : 'flex-start'} >
                            {data.actions && 
                                <Link to={data.actions[0].link}>
                                    <Button color="primary" variant="contained" size="large">
                                        {data.actions[0].label}
                                        {data.actions[0].icon &&
                                        <Grid container item xs={2} style={{marginLeft: '10px'}} >
                                            <BiRightArrowAlt size={25} />
                                        </Grid>
                                        }
                                    </Button>
                                </Link>
                            }
                        </Grid>
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid item container justifyContent="center" xs={12} md={6}>
                <img
                    src={heroImage}
                    alt="header image"
                    width="600"
                    height="600"
                />
            </Grid>
        </Grid>
    )
}

export default Hero
