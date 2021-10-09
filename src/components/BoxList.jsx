import React, { useState } from 'react'

// MATERIAL-UI
import { Paper, Typography, Button, Grid, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        border: '1px solid grey',
        // height: '15rem',
    },
    list: {
        // display: 'flex',
        // flexDirection: 'column',
        padding: 0,
        // border: '1px solid black',
    },
    listItem: {
        display: 'flex',
        height: '3rem',
        padding: 15,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}))
const BoxList = ({ marketOrder, data }) => {
    const classes = useStyles()

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
                            color="primary"
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
