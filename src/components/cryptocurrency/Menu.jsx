// REACT
import React, { useState, useEffect } from 'react'

// MATERIAL-UI
import { Grid } from '@material-ui/core'

// COMPONENTS
import Alert from '../common/Alert'
import Filter from './Filter'
import Preloader from '../common/Preloader'
import TableCryptoList from './TableCryptoList'
import Trending from './Trending'
import MenuButtons from './MenuButtons'
import CryptoNews from './CryptoNews'

// OTHER
import { useCoinInfo } from '../../state/zustand'
import { useMenuStyles } from './styles'
import componenetStepper from './componentStepper'

const Menu = () => {
    const {
        marketCoins,
        fetchMarketDetails,
        fetchTrendingCoins,
        trendingCoins,
        loading,
        error,
    } = useCoinInfo()
    const classes = useMenuStyles()

    const [componentTerm, setComponentTerm] = useState('market')
    const [currency, setCurrency] = useState('AUD')
    const [pageSize, setPageSize] = useState(10)
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetchMarketDetails(currency)
        fetchTrendingCoins()
    }, [currency, fetchMarketDetails, fetchTrendingCoins])

    // SEARCH
    useEffect(() => {
        if (componentTerm === 'market' && !loading) {
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

    const RenderComponent = () => {
        switch (componentTerm) {
            case componenetStepper.market:
                return <TableCryptoList data={data} pageSize={pageSize} />
            case componenetStepper.trending:
                return <Trending data={trendingCoins} />
            case componenetStepper.news:
                return <CryptoNews pageSize={pageSize} />
        }
    }

    if (loading) {
        return <Preloader />
    } else if (error) {
        return <Alert variant="danger">{error}</Alert>
    }

    return (
        <Grid container className={classes.container}>
            {/* MENU BUTTONS */}
            <MenuButtons onClick={setComponentTerm} selected={componentTerm} />

            {/* FILTER */}
            <Grid item xs={12} md={12}>
                <Filter
                    setSearch={setSearch}
                    search={search}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    currency={currency}
                    setCurrency={setCurrency}
                    selected={componentTerm}
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
                <RenderComponent />
            </Grid>
        </Grid>
    )
}

export default Menu
