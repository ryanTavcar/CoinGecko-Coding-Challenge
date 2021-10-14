import React, { useState } from 'react'

// MATERIAL-UI
import { Paper, Typography, Button, Grid, TextField } from '@material-ui/core'

// COMPONENTS
import Popup from '../common/Popup'

// OTHER
import { useBoxListStyles } from './styles'
import { useGeneralState } from '../../state/zustand'

const BoxList = (props) => {
    const { data, currency } = props
    const classes = useBoxListStyles()
    const { isModalOpen, setIsModalOpen } = useGeneralState()
    const [shares, setShares] = useState(0)

    const handleSharesChange = (event) => {
        setShares(event.target.value)
    }

    const handleModalOpen = () => setIsModalOpen()

    return (
        <>
            {/* <Popup isOpen={isModalOpen} /> */}

            <Grid item xs={12} className={classes.listItem}>
                <Typography variant="subtitle1" color="textSecondary">
                    {data[0][0]}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                    {data[0][1]}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.listItem}>
                <Typography variant="subtitle1" color="textSecondary">
                    {data[1][0]}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                    {data[1][1]}
                </Typography>
            </Grid>
            <Grid item xs={12} className={classes.listItem}>
                <Typography variant="subtitle1" color="textSecondary">
                    {data[2][0]}
                </Typography>
                <Typography variant="subtitle1" color="textPrimary">
                    {data[2][1]}
                </Typography>
            </Grid>
        </>
    )
}

export default BoxList
