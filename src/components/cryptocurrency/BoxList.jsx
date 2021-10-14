import React from 'react'

// MATERIAL-UI
import { Typography, Grid } from '@material-ui/core'

// OTHER
import { useBoxListStyles } from './styles'

const BoxList = (props) => {
    const { data } = props
    const classes = useBoxListStyles()

    return (
        <>
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
