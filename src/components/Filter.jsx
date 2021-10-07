import React, {useState} from 'react'
import { 
    InputLabel,
    MenuItem,
    FormControl,
    Select
} from '@material-ui/core';


const Filter = (props) => {

    const {currency, setCurrency} = props;

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <FormControl style={{minWidth: '10%' }}>
        <InputLabel id="demo-simple-select-helper-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={currency}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'AUD'}>AUD</MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'EUR'}>EUR</MenuItem>
          <MenuItem value={'GBP'}>GBP</MenuItem>
          <MenuItem value={'INR'}>INR</MenuItem>
          <MenuItem value={'CAD'}>CAD</MenuItem>
          <MenuItem value={'JPY'}>JPY</MenuItem>
        </Select>
      </FormControl>
    )
}

export default Filter
