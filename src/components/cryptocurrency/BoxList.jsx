import React, { useState } from 'react'

// MATERIAL-UI
import { Paper, Typography, Button, Grid, TextField } from '@material-ui/core'

// COMPONENTS
import Popup from '../common/Popup'

// OTHER
import { useBoxListStyles } from './styles'
import { useGeneralState } from '../../state/zustand'

const BoxList = (props) => {
    const { marketOrder, data } = props
    const classes = useBoxListStyles()
    const { isModalOpen, setIsModalOpen } = useGeneralState()
    const [shares, setShares] = useState(0)

    const handleSharesChange = (event) => {
        setShares(event.target.value)
    }

    const handleModalOpen = () => setIsModalOpen()

    return (
        <>
            <Popup isOpen={isModalOpen} />
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
                            onClick={handleModalOpen}
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
                            <h4>rank</h4>
                            <h4>{data.market_cap_rank}</h4>
                        </li>

                        <li className={classes.listItem}>
                            <h4>max supply</h4>
                            <h4>{data.market_data.max_supply}</h4>
                        </li>

                        <li className={classes.listItem}>
                            <h4>high 24h</h4>
                            <h4>{data.market_data.high_24h.aud}</h4>
                        </li>

                        <li className={classes.listItem}>
                            <h4>low 24h</h4>
                            <h4>{data.market_data.low_24h.aud}</h4>
                        </li>
                    </ul>
                </Paper>
            )}
        </>
    )
}

export default BoxList
