import React, { useState, useEffect } from 'react'
import { useStore } from '../state/zustand'
import CryptoList from '../components/CryptoList'
import Filter from '../components/Filter'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
import Trending from '../components/Trending'
import Header from '../components/Header'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import MobileCryptoList from '../components/MosaicCryptoList'
import Hero from '../components/Hero'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
    },
    textColor: {
        color: theme.palette.primary.main,
    },
}))

const Home = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const isLaptop = useMediaQuery((theme) => theme.breakpoints.down('md'))

    // const [filter, setFilter] = useState('trending')

    return (
        <Container
            maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'}
            className={classes.container}
        >
            <Hero />
            <Grid
                container
                direction="column"
                style={{ border: '1px solid red' }}
            >
                <Grid item xs={12} md={3}>
                    <Trending />
                </Grid>

                <Grid item xs={12} md={9}>
                    <CryptoList />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
