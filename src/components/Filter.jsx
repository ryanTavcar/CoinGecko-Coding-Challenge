import React, { useState, useRef } from 'react'
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    TextField,
} from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        border:
            theme.palette.type === 'light'
                ? ''
                : '1px solid ' + theme.palette.primary.main,
    },
    notchedOutline: {
        border:
            theme.palette.type === 'light'
                ? ''
                : '1px solid ' + theme.palette.primary.main + '!important',
    },
}))

const Filter = (props) => {
    const classes = useStyles()
    const ref = useRef()
    const { currency, setCurrency, pageSize, setPageSize, search, setSearch } =
        props

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
            <TextField
                style={{ width: '50%' }}
                id="outlined-search"
                value={search}
                onChange={handleSearchChange}
                type="text"
                InputProps={{
                    classes: {
                        notchedOutline: classes.notchedOutline,
                    },
                }}
            />

            <FormControl style={{ minWidth: '10%' }}>
                <InputLabel id="page-size-select">Size</InputLabel>
                <Select
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

            <FormControl style={{ minWidth: '10%' }}>
                <InputLabel id="currency-select">Currency</InputLabel>
                <Select
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
        </>
    )
}

export default Filter
