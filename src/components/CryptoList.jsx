// REACT
import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

// MATERIAL-UI
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Alert from './Alert'
import Filter from './Filter'
import Preloader from './Preloader'
import Pagination from './Pagination'
import TableCryptoList from './TableCryptoList'
import MosaicCryptoList from './MosaicCryptoList'

// OTHER
import { useMarket } from '../state/zustand'
import { handleLargeNumbers } from '../util/helper/helperFuctions'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        // border: '1px solid blue',
    },
    headingContainer: {
        marginBottom: 20,
    },
    heading: {
        fontFamily: 'Bungee',
    },
    filterContainer: {
        // border: '1px solid blue',
        marginBottom: 20,
    },
}))

const CryptoList = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const { coins, getCoins, loading, error } = useMarket()

    const [data, setData] = useState([])
    const [currency, setCurrency] = useState('AUD')
    const [pageSize, setPageSize] = useState(5)
    const [search, setSearch] = useState('')

    useEffect(() => {
        console.log('here')
        if (!coins || currency) {
            getCoins(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            )
        }

        // if (coins && !loading) {
        //     setData(coins)
        // }
    }, [currency])

    useEffect(() => {
        if (coins && !loading) {
            setData(coins)
        }

        if (search.length === 0) {
            setData(coins)
        } else {
            const filter = coins.filter((coin) => {
                return Object.values(coin)
                    .join(' ')
                    .toLowerCase()
                    .match(search.toLowerCase())
            })
            setData(filter)
        }
    }, [search, coins])

    return (
        <>
            <Grid container direction="column" className={classes.container}>
                <Grid item xs={12} className={classes.headingContainer}>
                    <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        className={classes.heading}
                    >
                        Browse Cyrptocurrencies
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="space-between"
                    className={classes.filterContainer}
                >
                    <Filter
                        currency={currency}
                        setCurrency={setCurrency}
                        pageSize={pageSize}
                        setPageSize={setPageSize}
                        setSearch={setSearch}
                        search={search}
                    />
                </Grid>
                {loading ? (
                    <Preloader />
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <>
                        {isMobile ? (
                            <MosaicCryptoList data={coins} />
                        ) : (
                            <TableCryptoList data={data} pageSize={pageSize} />
                        )}
                    </>
                )}
            </Grid>
        </>
    )
}

export default CryptoList
