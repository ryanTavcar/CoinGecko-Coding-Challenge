import React, { useState, useRef } from 'react'
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
} from '@mui/material'
import { useFilterStyles } from './styles'

const Filter = (props) => {
    const {
        currency,
        setCurrency,
        pageSize,
        setPageSize,
        search,
        setSearch,
        disable,
        searchbar,
    } = props
    const classes = useFilterStyles()

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
            {searchbar && (
                <TextField
                    fullWidth
                    disabled={disable}
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
            )}

            {pageSize && (
                <FormControl>
                    <InputLabel id="page-size-select">Size</InputLabel>
                    <Select
                        disabled={disable}
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
            )}

            {currency && (
                <FormControl>
                    <InputLabel id="currency-select">Currency</InputLabel>
                    <Select
                        disabled={disable}
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
            )}
        </>
    )
}

export default Filter
