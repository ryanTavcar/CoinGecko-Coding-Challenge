// REACT
import React from 'react'
import { Link } from 'react-router-dom'

// MATERIAL-UI
import { Grid } from '@material-ui/core'

// OTHER
import { handleLargeNumbers } from '../../util/helper/helperFuctions'
import { useTableStyles } from './styles'

const Trending = ({ data }) => {
    const classes = useTableStyles()

    return (
        <>
            <table className={classes.table}>
                <thead>
                    <tr
                        className={classes.tableRow}
                        style={{ borderBottom: '5px solid #313F4F' }}
                    >
                        <th className={classes.tableItem}>NAME</th>
                        <th className={classes.tableItem}>PRICE</th>
                        <th className={classes.tableItem}>MARKET CAP</th>
                        <th className={classes.tableItem}>TOTAL VOLUME</th>
                        <th className={classes.tableItem}>SYMBOL</th>
                    </tr>
                </thead>
                <tbody className={classes.tableRow}>
                    {data.coins.map((crypto) => (
                        <tr className={classes.bodyRow} key={crypto.item.id}>
                            <td className={classes.tableItem}>
                                <Grid container alignItems="center">
                                    <Grid item style={{ padding: 10 }}>
                                        <img
                                            src={crypto.item.small}
                                            width="40"
                                            alt={`${crypto.item.name}`}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            to={`/cryptocurrency/${crypto.item.id}`}
                                        >
                                            {crypto.item.name}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </td>
                            <td className={classes.tableItem}>
                                <Grid container alignItems="center">
                                    <Grid item>
                                        ${' '}
                                        {crypto.item.price_btc.toLocaleString()}
                                    </Grid>
                                </Grid>
                            </td>
                            <td className={classes.tableItem}>
                                ${' '}
                                {handleLargeNumbers(
                                    crypto.item.market_cap_rank
                                )}
                            </td>
                            <td className={classes.tableItem}>
                                $ {handleLargeNumbers(crypto.item.score)}
                            </td>
                            {/* <td>
                                    ${' '}
                                    {handleLargeNumbers(
                                        crypto.item.circulating_supply
                                    )}{' '}
                                    {crypto.item.symbol}
                                </td> */}
                            <td className={classes.tableItem}>
                                {crypto.item.symbol}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {loading ? (
                <Preloader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : ( */}
            {/* <Grid container direction="row" className={classes.container}>
                <Grid item xs={12}>
                    <Typography
                        variant="subtitle1"
                        color="textPrimary"
                        className={classes.heading}
                    >
                        Trending crytpos
                    </Typography>
                </Grid>

                <Grid item xs={12} className={classes.trendingContainer}>
                    {data.coins.map((crypto) => (
                        <Paper
                            key={crypto.item.id}
                            className={classes.trendingItem}
                        >
                            <Grid container>
                                <Grid item xs={2} className={classes.logo}>
                                    <img
                                        src={crypto.item.small}
                                        width="40"
                                        alt={`${crypto.name} image`}
                                    />
                                </Grid>
                                <Grid item xs={4} className={classes.title}>
                                    <Typography
                                        variant="body2"
                                        color="textPrimary"
                                    >
                                        <b>{crypto.item.symbol}</b>
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="textSecondary"
                                    >
                                        <b>{crypto.item.name}</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} className={classes.graph}>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                </Grid>
            </Grid> */}
            {/* )} */}
        </>
    )
}

export default Trending

// {data.coins && data.coins.map((crypto) => (
//     <tr key={crypto.item.id}>
//         <td><img src={crypto.item.small} width="60" alt={`${crypto.name} image`}/></td>
//         <td>
//         <Link to={`/cryptocurrency/${crypto.item.id}`}>{crypto.item.name}</Link>
//         </td>
//         <td>{crypto.item.symbol}</td>
//     </tr>
// ))}
