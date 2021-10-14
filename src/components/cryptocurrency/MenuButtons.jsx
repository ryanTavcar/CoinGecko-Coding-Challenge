// REACT
import React from 'react'

// MATERIAL-UI
import { Grid, Button } from '@material-ui/core'

// OTHER
import componenetStepper from './componentStepper'

const MenuButtons = (props) => {
    const { onClick, selected } = props

    const isMarket = selected === componenetStepper.market
    const isTrending = selected === componenetStepper.trending
    const isNews = selected === componenetStepper.news

    return (
        <Grid
            item
            md={12}
            container
            justifyContent="flex-start"
            style={{
                marginTop: 20,
                marginBottom: 20,
            }}
        >
            <Grid item xs={3} md={1} style={{ padding: 5 }}>
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    color={isMarket ? 'primary' : 'secondary'}
                    onClick={() => onClick('market')}
                >
                    Market
                </Button>
            </Grid>
            <Grid item xs={3} md={1} style={{ padding: 5 }}>
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    color={isTrending ? 'primary' : 'secondary'}
                    onClick={() => onClick('trending')}
                >
                    Trending
                </Button>
            </Grid>
            <Grid item xs={3} md={1} style={{ padding: 5 }}>
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    color={isNews ? 'primary' : 'secondary'}
                    onClick={() => onClick('news')}
                >
                    News
                </Button>
            </Grid>
        </Grid>
    )
}

export default MenuButtons
