import React, {useState, useEffect} from 'react';
import {useStore} from '../state/zustand';
import CryptoList from '../components/CryptoList';
import Filter from '../components/Filter';
import Alert from '../components/Alert';
import Preloader from '../components/Preloader';
import Trending from '../components/Trending';
import Header from '../components/Header';

import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, Typography} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
      },
    textColor : {
        color: theme.palette.primary.main
    }
}))

const Home = ({handleLightOrDark, lightOrDark}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"));
    const isLaptop = useMediaQuery(theme => theme.breakpoints.down("md"));
  
    const { coins, getCoins, loading, error } = useStore();
    const [url, setUrl] = useState('https://api.coingecko.com/api/v3/search/trending');
    const [filter, setFilter] = useState('trending')

    useEffect(() => {
        getCoins(url)
    }, [url]);

    return (
        <Container maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'} className={classes.container}>
            {/* <Trending data={coins}/> */}
            {/* <Header/> */}
            {/* <Filter setFilter={setFilter} setUrl={setUrl}/> */}
            {loading ? (
                <Preloader />
                ) : error ? (
                    <Alert variant='danger'>{error}</Alert>
                ) : (
                    <>
                        {/* {filter === 'all' && <CryptoList data={coins}/>} */}
                        {filter  === 'trending' && <Trending data={coins}/>}
                    </>
                )
            }
        </Container>
    )
}

export default Home
