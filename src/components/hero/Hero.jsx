// REACT
import React from 'react'
import Link from 'react-router-dom'
import { AiOutlineArrowDown } from 'react-icons/ai'

// MATERIAL-UI

import { Container, Typography, Grid } from '@material-ui/core/'
import { useMediaQuery } from '@material-ui/core'
// COMPONENTS

//OTHER
import heroImage from '../../images/green-hero-image2.png'
import { useHeroStyles } from './styles'

const Hero = () => {
    const classes = useHeroStyles()
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
                    <div className={classes.arrowCircle}></div>
                    <AiOutlineArrowDown
                        className={classes.arrowIcon}
                        size={60}
                    />
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
