// REACT
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
// ZUSTAND
import { useCoinInfo } from '../state/zustand'

// COMPONENTS
import Preloader from '../components/Preloader'
import Alert from '../components/Alert'
import { Line, Area } from 'react-chartjs-2'
import BoxList from '../components/BoxList'

// MATERIAL-UI
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
    },
    header: {
        // border: '1px solid red',
    },
    chart: {
        // border: '1px solid blue',
    },
    detailsContainer: {
        // border: '1px solid blue',
        height: '100%',
    },
    detailItem: {
        // border: '1px solid red',
        minWidth: '18rem',
        maxHeight: '10rem',
        [theme.breakpoints.down('md')]: {
            maxHeight: '40rem',
            height: '16rem',
        },
    },
}))

const Cryptocurrency = () => {
    const classes = useStyles()
    const { id } = useParams()
    const { pathname } = useLocation()
    const { coin, getPrices, getCoin, prices, resetCoins, loading, error } =
        useCoinInfo()

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    useEffect(() => {
        resetCoins()
    }, [])

    useEffect(() => {
        if (!coin || coin.id !== id || loading) {
            getPrices(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=aud&days=30&interval=daily`
            )
            console.log('here')
            getCoin(`https://api.coingecko.com/api/v3/coins/${id}`)
        }
    }, [coin, id, pathname])

    const chartData = (canvas) => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0, 0, 0, 400)
        gradient.addColorStop(0.5, 'rgba(46, 139, 192, 1)')
        gradient.addColorStop(1, 'rgba(46, 139, 192, .4)')

        let data = { index: [], price: [] }
        for (const item of prices.prices) {
            data.index.push(item[0])
            data.price.push(item[1])
        }

        return {
            labels: data.index.map((t) => new Date(t).toLocaleDateString()),
            datasets: [
                {
                    label: 'Price in AUD',
                    data: data.price.map((crypto) => crypto),
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

    const options = {
        responsive: true,
        maintainAspectRatio: true,
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

    console.log(coin)
    return (
        <>
            {loading ? (
                <Preloader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <>
                    {prices && chartData && (
                        <>
                            <Grid
                                container
                                direction={isMobile ? 'column' : 'row'}
                                className={classes.container}
                                style={{
                                    // border: '2px solid black',
                                    padding: 60,
                                }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={9}
                                    // style={{ border: '1px solid red' }}
                                >
                                    <Grid
                                        container
                                        item
                                        xs={6}
                                        alignItems="center"
                                        style={{
                                            // border: '1px solid red',
                                            marginBottom: 20,
                                        }}
                                    >
                                        <img
                                            src={coin.image.thumb}
                                            width="40"
                                        />
                                        <Typography style={{ marginLeft: 10 }}>
                                            {coin.name}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        container
                                        style={
                                            {
                                                // border: '1px solid red',
                                                // marginBottom: 20,
                                            }
                                        }
                                    >
                                        {/* HEADER */}
                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                // border: '1px solid orange',
                                                marginBottom: 20,
                                            }}
                                        >
                                            <Grid
                                                container
                                                // style={{ marginBottom: 20 }}
                                            >
                                                <Grid item>
                                                    <Typography variant="h3">
                                                        {`$ ${coin.market_data.current_price.aud} `}
                                                    </Typography>
                                                </Grid>
                                                <Grid
                                                    item
                                                    style={{ paddingLeft: 10 }}
                                                >
                                                    <Typography variant="h6">
                                                        AUD
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                style={{
                                                    // border: '1px solid orange',
                                                    color: 'green',
                                                }}
                                            >
                                                +1009.28 (+7.53%)
                                            </Grid>
                                        </Grid>

                                        {/* LINE CHART */}
                                        <Grid
                                            item
                                            xs={12}
                                            style={
                                                {
                                                    // border: '1px solid orange',
                                                    // height: 570,
                                                    // maxWidth: 1140,
                                                }
                                            }
                                        >
                                            <Line
                                                // height={'570px'}
                                                // width={'1140px'}
                                                data={chartData}
                                                options={options}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    md={3}
                                    style={
                                        {
                                            // border: '1px solid blue',
                                        }
                                    }
                                >
                                    <Grid
                                        container
                                        direction={isMobile ? 'row' : 'column'}
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                        className={classes.detailsContainer}
                                    >
                                        {/* DETAILS */}
                                        <Grid
                                            item
                                            xs={4}
                                            md={6}
                                            className={classes.detailItem}
                                        >
                                            <BoxList data={coin} />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            md={6}
                                            className={classes.detailItem}
                                        >
                                            <BoxList
                                                marketOrder={true}
                                                data={coin}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Cryptocurrency
