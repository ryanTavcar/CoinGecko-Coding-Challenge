import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Grid, Paper, Typography} from '@material-ui/core';
import { useMediaQuery } from "@material-ui/core";
import linechart from '../images/linechart_demo.jpg'

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0,
        overflow: 'hidden',
        border: '1px solid blue',
      },
      heading: {
        fontFamily: 'Bungee',
        // letterSpacing: 1,
      },
      trendingContainer: {
        backgroundColor: 'grey',
        border: '1px solid blue',
        display: 'inline-flex',
        flexDirection: 'row',
        padding: 5,
        height: '10rem',
        width: '100%',
        overflowX: 'scroll',
      },
      trendingItem: {
        border: '1px solid blue',
        minWidth: '20rem',
        margin: 5
      },
      logo: {
          padding: 5
      },
      title: {
          padding: 5
      },
      graph: {
        padding: 5
      },
}))

const Trending = ({data}) => {
    const classes = useStyles();

    return (
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Typography variant="subtitle1" color="textPrimary" className={classes.heading}>Trending crytpos</Typography>
                </Grid>

                <Grid item xs={12} className={classes.trendingContainer}>
                {data.coins && data.coins.map((crypto) => (
                    <Paper key={crypto.item.id} className={classes.trendingItem}>
                        <Grid container>
                            <Grid item xs={2} className={classes.logo}>
                                <img src={crypto.item.small} width="40" alt={`${crypto.name} image`}/>
                            </Grid>
                            <Grid item xs={4} className={classes.title}>
                                <Typography variant="body2" color="textPrimary" ><b>{crypto.item.symbol}</b></Typography>
                                <Typography variant="caption" color="textSecondary" ><b>{crypto.item.name}</b></Typography>
                            </Grid>
                            <Grid item xs={6} className={classes.graph}>
                                <img src={linechart} width="100%" height="60" alt='demo linechart'/>
                            </Grid>
                        </Grid>

                    </Paper>

                ))}
                </Grid>
            </Grid>

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