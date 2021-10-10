import React, { useState, useEffect, useMemo } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useMarket } from '../state/zustand'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import Preloader from './Preloader'
import Pagination from './Pagination'
import Filter from './Filter'
import { handleLargeNumbers } from '../util/helper/helperFuctions'
import { MasonryGrid } from '@egjs/react-grid'
import { useMediaQuery } from '@material-ui/core'

const MosaicCryptoList = ({ data }) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'))

    return (
        <MasonryGrid
            className="masonary"
            gap={10}
            defaultDirection={'end'}
            align={isMobile ? 'center' : 'start'}
            column={isMobile ? 2 : 3}
            columnSize={200}
            columnSizeRatio={0}
        >
            {data.length > 0 &&
                data.map((crypto, index) => (
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        key={crypto.id}
                        style={{ padding: 10 }}
                        className="item"
                    >
                        <Grid item xs={3}>
                            <img
                                src={crypto.image}
                                width="30"
                                alt={`${crypto.name} image`}
                            />
                        </Grid>

                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-end"
                        >
                            <Grid item>
                                <h4>{crypto.name}</h4>

                                <h5>{crypto.symbol}</h5>

                                <h5>
                                    $ {crypto.current_price.toLocaleString()}
                                </h5>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
        </MasonryGrid>
    )
}

export default MosaicCryptoList
