import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {useTrending} from '../state/zustand';
import Preloader from './Preloader';
import Alert from './Alert';
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";
import linechart from '../images/linechart_demo.jpg'

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
      },
      heading: {
        fontFamily: 'Bungee',
        // letterSpacing: 1,
      },
      trendingContainer: {
        borderRadius: 10,
        backgroundColor: '#d9dce3',
        // border: '1px solid blue',
        display: 'inline-flex',
        flexDirection: 'row',
        padding: 5,
        height: '10rem',
        width: '100%',
        overflowX: 'scroll',
      },
      '@global': {
        '*::-webkit-scrollbar': {
            height: '0.4em',
          },

        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
        },

        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#2D4492',
            borderRadius: '20px'
        }
      },
      trendingItem: {
          // border: '1px solid blue',
        borderRadius: 10,
        minWidth: '20rem',
        margin: 7
      },
      logo: {
          padding: 10
      },
      title: {
          padding: 10
      },
      graph: {
        padding: 10
      },
}))

const Trending = () => {
    const classes = useStyles();
    const { getCoins, coins, loading, error } = useTrending();

    useEffect(() => {
        getCoins('https://api.coingecko.com/api/v3/search/trending')
    }, []);

    return (
        <>
        {loading ? (
            <Preloader />
            ) : error ? (
                <Alert variant='danger'>{error}</Alert>
            ) : (

            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="textPrimary" className={classes.heading}>Trending crytpos</Typography>
                </Grid>

                <Grid item xs={12} className={classes.trendingContainer}>
                {coins.coins.map((crypto) => (
                    <Paper key={crypto.item.id} className={classes.trendingItem}>
                        <Grid container>
                            <Grid item xs={2} className={classes.logo}>
                                <img src={crypto.item.small} width="40" alt={`${crypto.name} image`}/>
                            </Grid>
                            <Grid item xs={4} className={classes.title}>
                                <Typography variant="body2" color="textPrimary" ><b>{crypto.item.symbol}</b></Typography>
                                <Typography variant="caption" color="textSecondary" ><b>{crypto.item.name}</b></Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.graph}>
                                <img src={linechart} width="100%" height="60" alt='demo linechart'/>
                            </Grid>
                        </Grid>

                    </Paper>

                ))}
                </Grid>
            </Grid>
            )
                }
                </>

    )
}

export default Trending

// {data.coins && data.coins.map((crypto) => (
//     <tr key={crypto.item.id}>
//         <td><img src={crypto.item.small} width="60" alt={`${crypto.name} image`}/></td>
//         <td>
//         <Link to={`/cryptocurrency/${crypto.item.id}`}>{crypto.item.name}</Link>
//         </td>
//         <td>{crypto.item.symbol}</td>
//     </tr>
// ))}