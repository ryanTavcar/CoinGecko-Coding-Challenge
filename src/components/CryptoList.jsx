import React, {useState, useEffect, useMemo } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import {useMarket} from '../state/zustand';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import Preloader from './Preloader';
import Pagination from './Pagination';
import Filter from './Filter';

const PAGE_SIZE = 10;

const CryptoList = () => {
  // const classes = useStyles();
  const { coins, getCoins, loading, error } = useMarket();

  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PAGE_SIZE;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    console.log('coins', coins)
    return coins.slice(firstPageIndex, lastPageIndex);
  });

  const formatPrice = new Intl.NumberFormat();
  const handleLargeNumbers = (value) => {

    const number = String(value)

    switch (true) {
      case number.length >= 13:
      console.log(number)
        return formatPrice.format(number).slice(0,5) + ' T';
      case number.length >= 10:
        return formatPrice.format(number).slice(0,5) + ' B';
      case number.length >= 7: 
      return formatPrice.format(number).slice(0,5) + ' M';
      default:
        return number
    }
  };

  useEffect(() => {
    getCoins('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log('useEffect', coins)
  }, []);

  return (
    <>
    <h1 className="card-title">All cyrptocurrencies</h1>
    <Filter/>
    {loading ? (
        <Preloader />
        ) : error ? (
            <Alert variant='danger'>{error}</Alert>
        ) : (
          <div className="card">
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
                  {coins.length > 0 && currentTableData.map((crypto) => (
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
                        ${formatPrice.format(crypto.current_price)}
                      </Grid>
                    </Grid>
                    </td>
                    <td>${handleLargeNumbers(crypto.market_cap)}</td>
                    <td>${handleLargeNumbers(crypto.total_volume)}</td>
                    <td>${handleLargeNumbers(crypto.circulating_supply)} {crypto.symbol}</td>
                    <td>{crypto.symbol}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
              <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={coins.length}
                pageSize={PAGE_SIZE}
                onPageChange={page => setCurrentPage(page)}
              />
          </div>
        )
    }
    </>
    );
}

export default CryptoList;