import React, { useState } from 'react'

// MATERIAL-UI
import { Paper, Typography, Button, Grid, TextField } from '@material-ui/core'

import { useBoxListStyles } from './styles'

const BoxList = (props) => {
    const { marketOrder, data } = props
    const classes = useBoxListStyles()

    const [shares, setShares] = useState(0)

    const handleSharesChange = (event) => {
        setShares(event.target.value)
    }
    return (
        <>
            {marketOrder ? (
                <Paper variant="outlined" className={classes.container}>
                    <Grid item xs={12} className={classes.listItem}>
                        <Typography variant="subtitle1" color="textPrimary">
                            <b>Market Order</b>
                        </Typography>
                    </Grid>
                    <Grid container className={classes.list}>
                        <Grid item xs={12} className={classes.listItem}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                shares
                            </Typography>
                            <TextField
                                style={{ width: '5rem' }}
                                id="outlined-number"
                                value={shares}
                                onChange={handleSharesChange}
                                type="number"
                                color="secondary"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.listItem}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                Market Price
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                                <b>{data.market_data.current_price.aud} AUD</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} className={classes.listItem}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                Commissions
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                                <b>0,00 AUD</b>
                            </Typography>
                        </Grid>
                        <div
                            style={{
                                borderBottom: '1px solid grey',
                                width: '90%',
                                margin: '0px 15px',
                            }}
                        ></div>
                        <Grid item xs={12} className={classes.listItem}>
                            <Typography
                                variant="subtitle1"
                                color="textSecondary"
                            >
                                Estimated cost
                            </Typography>
                            <Typography variant="subtitle1" color="textPrimary">
                                <b>0,00 AUD</b>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container style={{ padding: 15 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ width: '100%' }}
                        >
                            <Typography
                                variant="body1"
                                style={{ color: 'white' }}
                            >
                                Buy Shares
                            </Typography>
                        </Button>
                    </Grid>
                </Paper>
            ) : (
                <Paper variant="outlined" className={classes.container}>
                    <ul className={classes.list}>
                        <li className={classes.listItem}>
                            <h6>open</h6>
                            <h6>13.101.48</h6>
                        </li>

                        <li className={classes.listItem}>
                            <h6>open</h6>
                            <h6>13.101.48</h6>
                        </li>

                        <li className={classes.listItem}>
                            <h6>open</h6>
                            <h6>13.101.48</h6>
                        </li>

                        <li className={classes.listItem}>
                            <h6>open</h6>
                            <h6>13.101.48</h6>
                        </li>
                    </ul>
                </Paper>
            )}
        </>
    )
}

export default BoxList
