// REACT
import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
// ZUSTAND
import { useCoinInfo } from '../state/zustand'

// COMPONENTS
import Preloader from '../components/common/Preloader'
import Alert from '../components/common/Alert'
import LineChart from '../components/cryptocurrency/LineChart'
import BoxList from '../components/cryptocurrency/BoxList'

// MATERIAL-UI
import { Grid, Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'

// OTHER
import { useCurrencyStyles } from './styles'

const Cryptocurrency = () => {
    const classes = useCurrencyStyles()
    const { id } = useParams()
    const { pathname } = useLocation()
    const { coin, getPrices, getCoin, prices, loading, error } = useCoinInfo()

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    useEffect(() => {
        if (!coin || coin.id !== id || loading) {
            getPrices(id)
            getCoin(id)
        }
    }, [coin, id, pathname])

    if (loading) {
        return <Preloader />
    } else if (error) {
        return <Alert variant="Danger">{error}</Alert>
    }
    return (
        <>
            {Object.keys(coin).length > 0 && (
                <>
                    <Grid
                        container
                        direction={isMobile ? 'column' : 'row'}
                        className={classes.container}
                    >
                        <Grid item xs={12} md={9}>
                            <Grid
                                container
                                item
                                xs={6}
                                alignItems="center"
                                style={{
                                    marginBottom: 20,
                                }}
                            >
                                <img src={coin.image.thumb} width="40" />
                                <Typography style={{ marginLeft: 10 }}>
                                    {coin.name}
                                </Typography>
                            </Grid>
                            <Grid container>
                                {/* HEADER */}
                                <Grid
                                    item
                                    xs={12}
                                    style={{
                                        marginBottom: 20,
                                    }}
                                >
                                    <Grid container>
                                        <Grid item>
                                            <Typography variant="h3">
                                                {`$ ${coin.market_data.current_price.aud} `}
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{ paddingLeft: 10 }}>
                                            <Typography variant="h6">
                                                AUD
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        xs={12}
                                        style={{
                                            color: 'green',
                                        }}
                                    >
                                        +1009.28 (+7.53%)
                                    </Grid>
                                </Grid>

                                {/* LINE CHART */}
                                <Grid item xs={12}>
                                    <LineChart
                                        coinHistory={prices}
                                        coinName={coin.name}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
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
                                    <BoxList marketOrder={true} data={coin} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}

export default Cryptocurrency
