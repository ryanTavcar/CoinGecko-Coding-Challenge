// REACT
import React, { useState } from 'react'

// MATERIAL-UI
import { Grid, Button } from '@material-ui/core'

// OTHER
import componenetStepper from '../cryptocurrency/componentStepper'

const MenuButtons = (props) => {
    const { onClick, selected } = props

    // const [isActive, setIsActive] = useState(selected)

    const isMarket = selected === componenetStepper.market
    const isTrending = selected === componenetStepper.trending
    const isChart = selected === componenetStepper.chart

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
                    color={isChart ? 'primary' : 'secondary'}
                    onClick={() => onClick('chart')}
                >
                    Chart
                </Button>
            </Grid>
        </Grid>
    )
}

export default MenuButtons
