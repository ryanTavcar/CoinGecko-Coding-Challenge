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

const useStyles = makeStyles((theme) => ({
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
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        },

        '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#2D4492',
            borderRadius: '20px',
        },
    },
    trendingItem: {
        // border: '1px solid blue',
        borderRadius: 10,
        minWidth: '20rem',
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

const Trending = () => {
    const classes = useStyles()
    const { getCoins, coins, getPrices, prices, loading, error } = useTrending()
    // const { coin, getPrices, getCoin, prices } = useCoinInfo()

    useEffect(() => {
        if (!coins || loading) {
            getCoins('https://api.coingecko.com/api/v3/search/trending')
        }
        if (coins && !loading) {
            coins.coins.map((item) => {
                const id = item.item.id
                getPrices(
                    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=aud&days=30&interval=daily`
                )
                // console.log(item.item.id)d
            })

            // getCoin(`https://api.coingecko.com/api/v3/coins/${}`)
        }
    }, [coins])

    const chartData = (canvas) => {
        // console.log(price)
        if (prices) {
            const ctx = canvas.getContext('2d')
            const gradient = ctx.createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0.5, 'rgba(46, 139, 192, 1)')
            gradient.addColorStop(1, 'rgba(46, 139, 192, .4)')

            let data = { index: [], pricedata: [] }
            for (const item of prices.prices) {
                data.index.push(item[0])
                data.pricedata.push(item[1])
            }

            return {
                labels: data.index.map((t) => new Date(t).toLocaleDateString()),
                datasets: [
                    {
                        label: 'Price in AUD',
                        data: data.pricedata.map((crypto) => crypto),
                        fill: 'start',
                        backgroundColor: gradient,
                        borderColor: '#145DA0',
                        borderWidth: 2,
                        pointColor: '#fff',
                        pointStrokeColor: '#ff6c23',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: '#ff6c23',
                    },
                ],
            }
        }
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,

        scales: {
            yAxes: [
                {
                    display: false,
                },
            ],
            xAxes: [
                {
                    ticks: {
                        display: false,
                    },
                },
            ],
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false,
            },
        },
    }

    // console.log(coins)
    // console.log(prices)

    return (
        <>
            {loading ? (
                <Preloader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <Grid container className={classes.container}>
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
                        {coins.coins.map((crypto) => (
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
                                        {/* <img
                                            src={linechart}
                                            width="100%"
                                            height="60"
                                            alt="demo linechart"
                                        /> */}
                                        {prices && prices.prices && (
                                            // prices.map((price) => (
                                            <Line
                                                data={chartData}
                                                options={options}
                                            />
                                        )}
                                    </Grid>
                                </Grid>
                            </Paper>
                        ))}
                    </Grid>
                </Grid>
            )}
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
