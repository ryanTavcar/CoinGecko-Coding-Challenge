import React, {useState, useEffect, useMemo } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Link} from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { handleLargeNumbers } from '../util/helper/helperFuctions';
import Pagination from './Pagination';

// const PAGE_SIZE = 10;

const TableCryptoList = ({data, pageSize}) => {

    // const classes = useStyles();
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
    
        return data.slice(firstPageIndex, lastPageIndex);
    });

    return (
        <div className="card"
          >
            <table className='table'>
            <thead>
                <tr style={{borderBottom: '10px solid white'}}>
                <th>NAME</th>
                <th>PRICE</th>
                <th>MARKET CAP</th>
                <th>TOTAL VOLUME</th>
                <th>AVAILABLE SUPPLY</th>
                <th>SYMBOL</th>
                </tr>
            </thead>
            <tbody>
            {data.length > 0 && currentTableData.map((crypto) => (
                <tr key={crypto.id}>
                <td>
                <Grid container alignItems="center">
                    <Grid item style={{padding: 10}}>
                    <img src={crypto.image} width="40" alt={`${crypto.name} image`}/>
                    </Grid>
                    <Grid item >
                    <Link to={`/cryptocurrency/${crypto.id}`}>{crypto.name}</Link>
                    </Grid>
                </Grid>
                </td>
                <td >
                <Grid container alignItems="center" >
                <Grid item>
                    $ {crypto.current_price.toLocaleString()}
                </Grid>
                </Grid>
                </td>
                <td>$ {handleLargeNumbers(crypto.market_cap)}</td>
                <td>$ {handleLargeNumbers(crypto.total_volume)}</td>
                <td>$ {handleLargeNumbers(crypto.circulating_supply)} {crypto.symbol}</td>
                <td>{crypto.symbol}</td>
                </tr>
                ))}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}

            />
        </div>
    )
}

export default TableCryptoList
