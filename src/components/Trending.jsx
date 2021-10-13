// REACT
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Preloader from './Preloader'
import Alert from './Alert'
import { Line } from 'react-chartjs-2'

// OTHER
import { useTrending, useCoinInfo } from '../state/zustand'
import linechart from '../images/linechart_demo.jpg'
import { handleLargeNumbers } from '../util/helper/helperFuctions'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 10,
        overflow: 'hidden',
        // border: '1px solid blue',
        // height: '100%',
    },
    heading: {
        fontFamily: 'Bungee',
        // letterSpacing: 1,
    },
    trendingContainer: {
        borderRadius: 10,
        backgroundColor: '#d9dce3',
        // border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row',
        // padding: 5,
        // height: '10rem',
        // width: '100%',
        overflowX: 'scroll',
    },
    // '@global': {
    //     '*::-webkit-scrollbar': {
    //         height: '0.4em',
    //     },

    //     '*::-webkit-scrollbar-track': {
    //         '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
    //     },

    //     '*::-webkit-scrollbar-thumb': {
    //         backgroundColor: '#2D4492',
    //         borderRadius: '20px',
    //     },
    // },
    trendingItem: {
        // border: '1px solid blue',
        // borderRadius: 10,
        margin: 7,
    },
    logo: {
        padding: 10,
    },
    title: {
        padding: 10,
    },
    graph: {
        padding: 10,
    },
}))

const Trending = ({ data }) => {
    const classes = useStyles()
    console.log(data)

    return (
        <>
            <table className="table">
                <thead>
                    <tr style={{ borderBottom: '5px solid #313F4F' }}>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>MARKET CAP</th>
                        <th>TOTAL VOLUME</th>
                        <th>SYMBOL</th>
                    </tr>
                </thead>
                <tbody>
                    {data.coins.map((crypto) => (
                        <tr key={crypto.item.id}>
                            <td>
                                <Grid container alignItems="center">
                                    <Grid item style={{ padding: 10 }}>
                                        <img
                                            src={crypto.item.small}
                                            width="40"
                                            alt={`${crypto.item.name} image`}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            to={`/cryptocurrency/${crypto.item.id}`}
                                        >
                                            {crypto.item.name}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </td>
                            <td>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        ${' '}
                                        {crypto.item.price_btc.toLocaleString()}
                                    </Grid>
                                </Grid>
                            </td>
                            <td>
                                ${' '}
                                {handleLargeNumbers(
                                    crypto.item.market_cap_rank
                                )}
                            </td>
                            <td>$ {handleLargeNumbers(crypto.item.score)}</td>
                            {/* <td>
                                    ${' '}
                                    {handleLargeNumbers(
                                        crypto.item.circulating_supply
                                    )}{' '}
                                    {crypto.item.symbol}
                                </td> */}
                            <td>{crypto.item.symbol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {loading ? (
                <Preloader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : ( */}
            {/* <Grid container direction="row" className={classes.container}>
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        className={classes.heading}
                    >
                        Trending crytpos
                    </Typography>
                </Grid>

                <Grid item xs={12} className={classes.trendingContainer}>
                    {data.coins.map((crypto) => (
                        <Paper
                            key={crypto.item.id}
                            className={classes.trendingItem}
                        >
                            <Grid container>
                                <Grid item xs={2} className={classes.logo}>
                                    <img
                                        src={crypto.item.small}
                                        width="40"
                                        alt={`${crypto.name} image`}
                                    />
                                </Grid>
                                <Grid item xs={4} className={classes.title}>
                                    <Typography
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        <b>{crypto.item.symbol}</b>
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        <b>{crypto.item.name}</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.graph}>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Grid>
            </Grid> */}
            {/* )} */}
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
