// REACT
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
// ZUSTAND
import { useCoinInfo } from '../state/zustand'

// COMPONENTS
import Preloader from '../components/Preloader'
import Alert from '../components/Alert'
import { Line } from 'react-chartjs-2'
// MATERIAL-UI
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
    },
    header: {
        border: '1px solid red',
    },
}))

const Cryptocurrency = () => {
    const classes = useStyles()
    const { id } = useParams()
    const { pathname } = useLocation()
    const { coin, getPrices, getCoin, prices, loading, error } = useCoinInfo()

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        if (!coin || loading) {
            console.log('here')
            getPrices(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=aud&days=30&interval=daily`
            )
            getCoin(`https://api.coingecko.com/api/v3/coins/${id}`)
        }
        if (prices && !loading) {
            let data = { index: [], price: [] }
            for (const item of prices.prices) {
                data.index.push(item[0])
                data.price.push(item[1])
            }

            setChartData({
                labels: data.index.map((t) => new Date(t).toLocaleDateString()),
                datasets: [
                    {
                        label: 'Price in AUD',
                        data: data.price.map((crypto) => crypto),
                        backgroundColor: ['#ffbb11'],
                    },
                ],
            })
        }
    }, [coin, id, pathname])

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
                            <Grid container direction="column">
                                <Grid
                                    container
                                    direction="row"
                                    className={classes.container}
                                >
                                    <Grid
                                        item
                                        xs={6}
                                        className={classes.header}
                                    >
                                        ${coin.market_data.current_price.aud}{' '}
                                        aud
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper>container</Paper>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    direction="column"
                                    // justifyContent="flex-end"
                                >
                                    <Grid item xs={6}>
                                        <Line
                                            data={chartData}
                                            options={{
                                                plugins: {
                                                    title: {
                                                        display: true,
                                                        text: `${id} prices`,
                                                    },
                                                    legend: {
                                                        display: true,
                                                        position: 'bottom',
                                                    },
                                                },
                                            }}
                                        />
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
