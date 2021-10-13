import { useMediaQuery } from '@material-ui/core'
import Link from 'react-router-dom'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import { BiRightArrowAlt } from 'react-icons/bi'
import heroImage from '../images/green-hero-image2.png'
import { AiOutlineArrowDown } from 'react-icons/ai'

const useStyles = makeStyles((theme) => ({
    container: {
        // minHeight: 'calc(100vh - 170px)',
        // border: '1px solid red',
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
        // height: '5rem',
        paddingTop: '3rem',
    },
    textContainer: {
        // border: '1px solid red',
        [theme.breakpoints.down('sm')]: {
            padding: 20,
        },
    },
}))

const Hero = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const scrollDown = () => {
        setTimeout(function () {
            window.scrollTo({
                top: window.screen.height,
                behavior: 'smooth',
            })
        }, 400)
    }

    return (
        <Grid container className={classes.container} alignItems="center">
            <Grid
                item
                xs={12}
                md={6}
                container
                direction="column"
                justifyContent="space-between"
                className={classes.textContainer}
            >
                <Grid item md={12}>
                    <Typography
                        className={classes.title}
                        variant={isMobile ? 'h3' : 'h2'}
                        component="h1"
                    >
                        <b>
                            Crytograb are leaders in the cryptocurrency martket
                        </b>
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Typography
                        className={classes.subtitle}
                        variant="subtitle2"
                        component="h3"
                    >
                        browse about our Cyrptocurrencies data and view charts
                        and details about the next up and comming crytpos!
                    </Typography>
                </Grid>
                <Grid item onClick={scrollDown} md={12}>
                    <div
                        style={{
                            // border: '1px solid red',
                            zIndex: 1,
                            position: 'relative',
                            top: 70,
                            left: 5,
                            borderRadius: '50%',
                            width: 50,
                            height: 50,
                            backgroundColor: '#DBFB53',
                        }}
                    ></div>
                    <AiOutlineArrowDown
                        style={{ position: 'relative', zIndex: 2 }}
                        size={60}
                    />
                </Grid>
            </Grid>
            <Grid item container justifyContent="center" xs={12} md={6}>
                <img
                    src={heroImage}
                    alt="header image"
                    width="500"
                    height="500"
                />
            </Grid>
        </Grid>
    )
}

export default Hero
