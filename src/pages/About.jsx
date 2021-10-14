// REACT
import React from 'react'
import ReactMarkdown from 'react-markdown'

// MATERIAL-UI
import { Container, Grid } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Popup from '../components/common/Popup'

// OTHER
import { useGeneralState } from '../state/zustand'
import { useHomeStyles } from './styles'

const About = () => {
    const classes = useHomeStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const isLaptop = useMediaQuery((theme) => theme.breakpoints.between('md'))
    const { isModalOpen } = useGeneralState()

    const markdown =
        "# CoinGecko Challenge \n This project was created as a coding challenge to showcase my skills to Caleb & Brown; an award - winning cryptocurrency brokerage firm here in Melbourne. \n\n Whilst navigating through the site, you will see a home page, about page and a page dedicated to indepth details on cryptocurrencies. \n\n ## Favourites \n Some of my favourite componets are the LineChart componet on /cryptocurrencies/:coin id as it was my first endevour into rendering charts and also, being an opportunity to get up, close and personally with cryptocurrencies. \n\n Another favourite component is the Pagination. A complex component that allows users to cycle through an array of cryptocurrencies, all while displaying valuable ui markers such as, displaying '...' for large total  number of pages. the pagination will also dynamically update if the user chooses to show case either 5, 10, 20, 50 or 100 cryptocurrencies per page. \n\n  My last favourite feature of the app is my search filter on the home page. The search feature allows users to search for cryptocurrencies by name or by their symbol, all whilst updating the pagination, so the the pagination always represents the total number of the cryptocurrencies found in the filter. \n ## Tech Stack \n - React \n - Material-ui \n - React Charts 2 \n - Zustand \n - Coingecko api"
    return (
        <Container
            maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'}
            className={classes.container}
            style={{ marginTop: 50, height: '80vh', padding: 20 }}
        >
            <Popup isOpen={isModalOpen} />

            <Grid item>
                <ReactMarkdown children={markdown}></ReactMarkdown>
            </Grid>
        </Container>
    )
}

export default About
