import React, { useState, useEffect } from 'react'
import { useStore } from '../state/zustand'
// import CryptoList from '../components/CryptoList'
import Filter from '../components/Filter'
import Alert from '../components/Alert'
import Preloader from '../components/Preloader'
// import Trending from '../components/Trending'

import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import MobileCryptoList from '../components/MosaicCryptoList'
import Hero from '../components/Hero'
import Menu from '../components/Menu'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#eef2e0',
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
            <Grid container direction="row" style={{ minHeight: '35rem' }}>
                <Grid item xs={12}>
                    <Menu />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home
