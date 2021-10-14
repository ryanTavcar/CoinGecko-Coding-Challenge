// REACT
import React from 'react'

//MATERIAL-UI
import {
    Grid,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
} from '@mui/material'
import { useMediaQuery } from '@material-ui/core'

// OTHER
import componenetStepper from './componentStepper'
import { useFilterStyles } from './styles'

const Filter = (props) => {
    const {
        currency,
        setCurrency,
        pageSize,
        setPageSize,
        search,
        setSearch,
        selected,
    } = props
    const classes = useFilterStyles()
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const isTrending = selected === componenetStepper.trending
    const isNews = selected === componenetStepper.news

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value)
    }

    const handlePageSize = (event) => {
        setPageSize(event.target.value)
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <>
            <Grid
                container
                alignItems="center"
                direction={isMobile ? 'column-reverse' : 'row'}
            >
                <Grid item xs={12} md={6} style={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        disabled={isTrending || isNews}
                        id="outlined-search"
                        value={search}
                        placeholder="search name or symbol"
                        onChange={handleSearchChange}
                        type="text"
                        InputProps={{
                            className: classes.input,
                            classes: {
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                    md={6}
                    container
                    justifyContent="flex-end"
                    style={{
                        margin: '20px 0px',
                        width: '100%',
                    }}
                >
                    <Grid item xs={3} sm={2} md={2} style={{ marginRight: 20 }}>
                        <FormControl>
                            <InputLabel id="page-size-select">Size</InputLabel>
                            <Select
                                disabled={isTrending}
                                labelId="page-size-select"
                                id="page-size-select"
                                value={pageSize}
                                label="Size"
                                onChange={handlePageSize}
                                className={classes.root}
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3} sm={2} md={2} style={{ marginRight: 10 }}>
                        <FormControl>
                            <InputLabel id="currency-select">
                                Currency
                            </InputLabel>
                            <Select
                                disabled={isTrending || isNews}
                                labelId="currency-select"
                                id="currency-select"
                                value={currency}
                                label="Currency"
                                onChange={handleCurrencyChange}
                                className={classes.root}
                            >
                                <MenuItem value={'AUD'}>AUD</MenuItem>
                                <MenuItem value={'USD'}>USD</MenuItem>
                                <MenuItem value={'EUR'}>EUR</MenuItem>
                                <MenuItem value={'GBP'}>GBP</MenuItem>
                                <MenuItem value={'INR'}>INR</MenuItem>
                                <MenuItem value={'CAD'}>CAD</MenuItem>
                                <MenuItem value={'JPY'}>JPY</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Filter
