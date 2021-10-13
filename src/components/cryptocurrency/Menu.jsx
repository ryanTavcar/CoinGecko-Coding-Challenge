// REACT
import React, { useState, useEffect } from 'react'

// MATERIAL-UI
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Alert from '../common/Alert'
import Filter from './Filter'
import Preloader from '../common/Preloader'
import TableCryptoList from './TableCryptoList'
import Trending from './Trending'

// OTHER
import { useCoinInfo } from '../../state/zustand'
import { useMenuStyles } from './styles'

const Menu = () => {
    // const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const {
        marketCoins,
        fetchMarketDetails,
        fetchTrendingCoins,
        trendingCoins,
        resetCoins,
        loading,
        error,
    } = useCoinInfo()
    const classes = useMenuStyles()
    const [isMarket, setIsMarket] = useState(true)

    const [currency, setCurrency] = useState('AUD')
    const [pageSize, setPageSize] = useState(5)
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchMarketDetails(currency)
        fetchTrendingCoins()
    }, [currency])

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

    if (loading) {
        return <Preloader />
    } else if (error) {
        return <Alert variant="danger">{error}</Alert>
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
                <Grid item xs={3} md={2} lg={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => hangleChangeComponent('market')}
                    >
                        Market
                    </Button>
                </Grid>
                <Grid item xs={3} md={2} lg={1}>
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
                {isMarket ? (
                    <TableCryptoList data={data} pageSize={pageSize} />
                ) : (
                    <Trending data={trendingCoins} />
                )}
            </Grid>
        </Grid>
    )
}

export default Menu
