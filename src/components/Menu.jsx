// REACT
import React, { useState, useEffect } from 'react'

// import { Link } from 'react-router-dom'

// MATERIAL-UI
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Alert from './Alert'
import Filter from './Filter'
import Preloader from './Preloader'
import Pagination from './Pagination'
import TableCryptoList from './TableCryptoList'
import MosaicCryptoList from './MosaicCryptoList'
import Trending from './Trending'

// OTHER
import { useCoinInfo } from '../state/zustand'
import { handleLargeNumbers } from '../util/helper/helperFuctions'
import useSearch from '../util/helper/useSearch'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 10,
        overflowX: 'auto',
        // border: '1px solid blue',
        // height: '100%',
    },
}))

const Menu = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const {
        marketCoins,
        getMarketCoins,
        getTrendingCoins,
        trendingCoins,
        resetCoins,
        loading,
        error,
    } = useCoinInfo()
    const classes = useStyles()
    const [isMarket, setIsMarket] = useState(true)

    const [currency, setCurrency] = useState('AUD')
    const [pageSize, setPageSize] = useState(5)
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    // const { data, search, setSearch } = useSearch(
    //     isMarket,
    //     marketCoins,
    //     loading
    // )
    // const [search, setSearch] = useState('')

    useEffect(() => {
        resetCoins()
        if ((!marketCoins && !trendingCoins) || currency) {
            getMarketCoins(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
            )
            getTrendingCoins('https://api.coingecko.com/api/v3/search/trending')
        }
    }, [currency])

    console.log(data)
    console.log(marketCoins)
    // SEARCH
    useEffect(() => {
        if (isMarket && !loading) {
            setData(marketCoins)
        }

        if (search.length === 0) {
            setData(marketCoins)
        } else {
            const filter = marketCoins.filter((coin) => {
                return Object.values(coin)
                    .join(' ')
                    .toLowerCase()
                    .match(search.toLowerCase())
            })
            setData(filter)
        }
    }, [search, marketCoins])

    const hangleChangeComponent = (type) => {
        switch (type) {
            case 'market':
                return setIsMarket(true)
            case 'trending':
                return setIsMarket(false)
        }
    }

    return (
        <Grid container className={classes.container}>
            <Grid
                container
                style={{
                    marginTop: 20,
                    marginBottom: 20,
                }}
            >
                <Grid item xs={3} md={1}>
                    {/* <Typography>Market</Typography> */}
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => hangleChangeComponent('market')}
                    >
                        Market
                    </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => hangleChangeComponent('trending')}
                    >
                        Trending
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Filter
                            searchbar
                            setSearch={setSearch}
                            search={search}
                            disable={!isMarket}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Grid container justifyContent="flex-end">
                            <Grid item xs={6} md={2}>
                                <Filter
                                    pageSize={pageSize}
                                    setPageSize={setPageSize}
                                    disable={!isMarket}
                                />
                            </Grid>
                            <Grid item xs={6} md={2}>
                                <Filter
                                    currency={currency}
                                    setCurrency={setCurrency}
                                    disable={!isMarket}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                item
                xs={12}
                style={{
                    marginTop: 20,
                    marginBottom: 20,
                }}
            >
                {loading ? (
                    <Preloader />
                ) : error ? (
                    <Alert variant="danger">{error}</Alert>
                ) : (
                    <>
                        {isMarket ? (
                            <TableCryptoList data={data} pageSize={pageSize} />
                        ) : (
                            <Trending data={trendingCoins} />
                        )}
                    </>
                )}
            </Grid>
        </Grid>
    )
}

export default Menu
