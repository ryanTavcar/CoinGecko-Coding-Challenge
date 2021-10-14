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
import MenuButtons from '../common/MenuButtons'

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
            {/* MENU BUTTONS */}
            <MenuButtons onClick={hangleChangeComponent} />

            {/* FILTER */}
            <Grid item xs={12} md={12}>
                <Filter
                    setSearch={setSearch}
                    search={search}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    currency={currency}
                    setCurrency={setCurrency}
                    disable={!isMarket}
                />
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
