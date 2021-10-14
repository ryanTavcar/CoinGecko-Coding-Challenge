// REACT
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import HTMLReactParser from 'html-react-parser'

// COMPONENTS
import Preloader from '../components/common/Preloader'
import Alert from '../components/common/Alert'
import LineChart from '../components/cryptocurrency/LineChart'
import BoxList from '../components/cryptocurrency/BoxList'

// MATERIAL-UI

import {
    Grid,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
    Container,
} from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'

// OTHER
import { useCoinInfo } from '../state/zustand'
import { useCurrencyStyles } from './styles'
import { handleLargeNumbers } from '../util/helper/helperFuctions'

const Cryptocurrency = () => {
    const classes = useCurrencyStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const isLaptop = useMediaQuery((theme) => theme.breakpoints.between('md'))
    const { id } = useParams()
    const { pathname } = useLocation()
    const { coin, getPrices, getCoin, prices, loading, error } = useCoinInfo()

    const [currency, setCurrency] = useState('aud')

    useEffect(() => {
        if (!coin || coin.id !== id || loading) {
            getPrices(id)
            getCoin(id)
        }
    }, [coin, id, pathname])
    console.log(coin)

    const [percentageChange, setPercentageChange] = useState(0)

    const handlepercentageChange = () => {
        if (Object.keys(coin).length > 0) {
            setPercentageChange(
                coin.market_data.market_cap_change_percentage_24h
            )
        }
        return
    }

    useEffect(() => {
        handlepercentageChange()
    }, [coin])

    if (loading) {
        return <Preloader />
    } else if (error) {
        return <Alert variant="danger">{error}</Alert>
    }
    return (
        <Container
            maxWidth={isMobile ? 'sm' : isLaptop ? 'md' : 'lg'}
            className={classes.container}
        >
            {Object.keys(coin).length > 0 && (
                <Grid container>
                    {/* LEFT COLUMN */}
                    <Grid item md={8} container>
                        {/* COIN SYMBOL */}
                        <Grid
                            item
                            md={12}
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item md={10}>
                                <Grid item md={12}>
                                    <Typography variant="h2">
                                        {coin.name}
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography variant="h6">
                                        {coin.symbol.toUpperCase()}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={2}>
                                <FormControl>
                                    <InputLabel id="currency-select">
                                        Currency
                                    </InputLabel>
                                    <Select
                                        labelId="currency-select"
                                        id="currency-select"
                                        value={currency}
                                        label="Currency"
                                        color="secondary"
                                        onChange={(event) =>
                                            setCurrency(event.target.value)
                                        }
                                        className={classes.root}
                                    >
                                        <MenuItem value={'aud'}>AUD</MenuItem>
                                        <MenuItem value={'usd'}>USD</MenuItem>
                                        <MenuItem value={'eur'}>EUR</MenuItem>
                                        <MenuItem value={'gbp'}>GBP</MenuItem>
                                        <MenuItem value={'inr'}>INR</MenuItem>
                                        <MenuItem value={'cad'}>CAD</MenuItem>
                                        <MenuItem value={'jpy'}>JPY</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* COIN PRICE */}
                        <Grid item md={12} container alignItems="center">
                            <Grid item md={8}>
                                <Typography variant="h1">
                                    <span style={{ fontSize: '48px' }}>$</span>
                                    {coin.market_data.current_price[currency]}
                                </Typography>
                            </Grid>

                            <Grid item md={4} container>
                                <BoxList
                                    data={[
                                        [
                                            '24H %',
                                            coin.market_data
                                                .market_cap_change_percentage_24h,
                                        ],
                                        [
                                            '24H Low',

                                            coin.market_data.low_24h[currency],
                                        ],
                                        [
                                            '24H High',
                                            coin.market_data.high_24h[currency],
                                        ],
                                    ]}
                                    currency={currency}
                                />
                            </Grid>
                        </Grid>

                        {/* LINE CHART */}
                        <Grid item md={12}>
                            <LineChart
                                coinHistory={prices}
                                currency={currency}
                            />
                        </Grid>
                    </Grid>

                    {/* RIGHT COLUMN */}
                    <Grid item md={4} container>
                        {/* MARKET CAP */}
                        <Grid item md={12} container>
                            <Grid item md={6}>
                                <Grid item md={12}>
                                    <Typography variant="h6">
                                        Market Cap
                                    </Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Typography variant="h4">
                                        {handleLargeNumbers(
                                            coin.market_data.market_cap[
                                                currency
                                            ]
                                        )}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/* MARKET STATS */}
                        <Grid item md={12} container>
                            <Grid item md={12}>
                                <hr />
                                <Typography variant="h6">
                                    Market Stats
                                </Typography>
                            </Grid>
                            <BoxList
                                data={[
                                    [
                                        'Total Supply',
                                        handleLargeNumbers(
                                            coin.market_data.total_supply
                                        ),
                                    ],
                                    [
                                        'Max Supply',
                                        handleLargeNumbers(
                                            coin.market_data.max_supply
                                        ),
                                    ],
                                    ['CoinGecko Rank', coin.coingecko_rank],
                                ]}
                                currency={currency}
                            />

                            <Grid item xs={12} className={classes.description}>
                                <hr />
                                <Typography variant="h6">
                                    Description
                                </Typography>
                                <Typography variant="body1" color="textPrimary">
                                    {HTMLReactParser(coin.description.en)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Container>
    )
}

export default Cryptocurrency
