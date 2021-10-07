import React, {useState, useEffect, useMemo } from 'react';
import {useMarket} from '../state/zustand';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import Preloader from './Preloader';
import Pagination from './Pagination';

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

  useEffect(() => {
    getCoins('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    console.log('useEffect', coins)
  }, []);

  return (
    <>
    {loading ? (
        <Preloader />
        ) : error ? (
            <Alert variant='danger'>{error}</Alert>
        ) : (
          <div className="card">
              <h1 className="card-title">All cyrptocurrencies</h1>
                <table className='table'>
                <thead>
                  <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>SYMBOL</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.length > 0 && currentTableData.map((crypto) => (
                    <tr key={crypto.id}>
                      <td><img src={crypto.image} width="60" alt={`${crypto.name} image`}/></td>
                      <td>
                        <Link to={`/cryptocurrency/${crypto.id}`}>{crypto.name}</Link>
                      </td>
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