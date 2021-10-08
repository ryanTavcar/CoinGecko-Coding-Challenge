import React, { useState, useRef } from 'react'
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material'

const Filter = (props) => {
    const ref = useRef()
    const { currency, setCurrency, pageSize, setPageSize } = props

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value)
    }

    const handlePageSize = (event) => {
        setPageSize(event.target.value)
    }

    return (
        <>
            <FormControl style={{ minWidth: '10%' }}>
                <InputLabel id="page-size-select">Size</InputLabel>
                <Select
                    labelId="page-size-select"
                    id="page-size-select"
                    value={pageSize}
                    label="Size"
                    onChange={handlePageSize}
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
