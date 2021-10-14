// REACT
import React from 'react'

// MATERIAL-UI
import { Grid, Button } from '@material-ui/core'

const MenuButtons = (props) => {
    const { onClick } = props

    return (
        <Grid
            item
            md={12}
            container
            justifyContent="flex-start"
            style={{
                // border: '1px solid red',
                marginTop: 20,
                marginBottom: 20,
            }}
        >
            <Grid item xs={3} md={1} style={{ padding: 5 }}>
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    color="primary"
                    onClick={() => onClick('market')}
                >
                    Market
                </Button>
            </Grid>
            <Grid item xs={3} md={1} style={{ padding: 5 }}>
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    color="secondary"
                    onClick={() => onClick('trending')}
                >
                    Trending
                </Button>
            </Grid>
            <Grid item xs={3} md={1} style={{ padding: 5 }}>
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    color="secondary"
                    onClick={() => onClick('chart')}
                >
                    Chart
                </Button>
            </Grid>
        </Grid>
    )
}

export default MenuButtons
