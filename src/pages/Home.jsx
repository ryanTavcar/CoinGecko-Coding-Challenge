// REACT
import React from 'react'

// MATERIAL-UI
import { Container, Grid, Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Hero from '../components/hero/Hero'
import Menu from '../components/cryptocurrency/Menu'
import Popup from '../components/common/Popup'

// OTHER
import { useGeneralState } from '../state/zustand'
import { useHomeStyles } from './styles'

const Home = () => {
    const classes = useHomeStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const isLaptop = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const { isModalOpen } = useGeneralState()

    return (
        <Container
            maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'}
            className={classes.container}
        >
            <Popup isOpen={isModalOpen} />
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
