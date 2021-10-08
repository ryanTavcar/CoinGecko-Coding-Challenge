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
    chart: {
        border: '1px solid blue',
    },
    detailsContainer: {
        border: '1px solid purple',
    },
    detailItem: {
        width: '50%',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        // border: '4px solid red',
    },
    listItem: {
        display: 'flex',
        border: '1px solid black',
        padding: 20,
        width: '100%',
        justifyContent: 'space-between',
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

    // console.log(coin)

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
                                direction="row"
                                style={{ border: '2px solid black' }}
                            >
                                <Grid
                                    item
                                    xs={6}
                                    style={{ border: '1px solid red' }}
                                >
                                    <Grid
                                        container
                                        style={{ border: '1px solid red' }}
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                border: '1px solid orange',
                                            }}
                                        >
                                            $
                                            {coin.market_data.current_price.aud}{' '}
                                            aud
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            style={{
                                                border: '1px solid orange',
                                            }}
                                        >
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
                                <Grid
                                    item
                                    xs={6}
                                    style={{ border: '1px solid green' }}
                                >
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                        className={classes.detailsContainer}
                                    >
                                        <Grid
                                            item
                                            xs={6}
                                            className={classes.detailItem}
                                        >
                                            <Paper>
                                                <ul className={classes.list}>
                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>

                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>

                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>

                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>
                                                </ul>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            item
                                            xs={6}
                                            className={classes.detailItem}
                                        >
                                            <Paper>
                                                <ul className={classes.list}>
                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>

                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>

                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>

                                                    <li
                                                        className={
                                                            classes.listItem
                                                        }
                                                    >
                                                        <h6>open</h6>
                                                        <h6>13.101.48</h6>
                                                    </li>
                                                </ul>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* <Grid
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
                                    <Grid
                                        item
                                        xs={6}
                                        className={classes.detailsContainer}
                                    >
                                        <Grid container direction="column">
                                            <Grid item>
                                                <Paper>
                                                    <ul>
                                                        <li>info1</li>
                                                        <li>info2</li>
                                                        <li>info3</li>
                                                        <li>info4</li>
                                                    </ul>
                                                </Paper>
                                            </Grid>
                                            <Grid item>
                                                <Paper>
                                                    <ul>
                                                        <li>info1</li>
                                                        <li>info2</li>
                                                        <li>info3</li>
                                                        <li>info4</li>
                                                    </ul>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid
                                        container
                                        direction="column"
                                        className={classes.chart}
                                    >
                                        <Grid item xs={12}>
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
                                </Grid> */}
                            </Grid>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Cryptocurrency
