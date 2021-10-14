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
import { LineChart } from 'recharts'
import { useTableStyles } from './styles'

const Menu = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const {
        marketCoins,
        fetchMarketDetails,
        fetchTrendingCoins,
        getPrices,
        trendingCoins,
        loading,
        error,
    } = useCoinInfo()
    const classes = useTableStyles()

    const [isMarket, setIsMarket] = useState(true)
    // const [isChart, setIsChart] = useState(false)
    const [currency, setCurrency] = useState('AUD')
    const [pageSize, setPageSize] = useState(10)
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
                setIsMarket(true)
                return
            case 'trending':
                setIsMarket(false)
                return
        }
    }

    if (loading) {
        return <Preloader />
    } else if (error) {
        return <Alert variant="Danger">{error}</Alert>
    }

    return (
        <Grid container className={classes.container}>
            <Grid
                container
                item
                lg={4}
                style={{
                    // border: '1px solid red',
                    marginTop: 20,
                    marginBottom: 20,
                }}
            >
                <Grid item xs={3} md={2} lg={4}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => hangleChangeComponent('market')}
                    >
                        Market
                    </Button>
                </Grid>
                <Grid item xs={3} md={2} lg={4}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => hangleChangeComponent('trending')}
                    >
                        Trending
                    </Button>
                </Grid>
                <Grid item xs={3} md={2} lg={4}>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => hangleChangeComponent('chart')}
                    >
                        Chart
                    </Button>
                </Grid>
            </Grid>
            <Grid item xs={12} md={12}>
                <Grid
                    container
                    direction={isMobile ? 'column-reverse' : 'row'}
                    alignItems={isMobile ? 'flex-start' : 'center'}
                >
                    <Grid item xs={12} md={6} style={{ width: '100%' }}>
                        <Filter
                            searchbar
                            setSearch={setSearch}
                            search={search}
                            disable={!isMarket}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        md={6}
                        style={{
                            margin: '20px 0px',
                            // border: '1px solid red',
                            width: '100%',
                        }}
                    >
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
