import React, {useState, useEffect} from 'react';
import {useStore} from '../state/zustand';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import Preloader from './Preloader';

const CryptoList = () => {
  const { coins, getCoins, resetCoins, loading, error } = useStore();
  const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/list?include_platform=false');

  useEffect(() => {
    getCoins(url)
  }, [url]);

  return (
    <div className="card">

        <h1 className="card-title">List of all crypto's</h1>

        {loading ? (
          <Preloader />
        ) : error ? (
          <Alert variant='danger'>{error}</Alert>
        ) : (
          <>
          <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>SYMBOL</th>
            </tr>
          </thead>
          <tbody>
            {coins.slice(0,99).map((crypto) => (
              <tr key={crypto.id}>
                <td>{crypto.id}</td>
                <td>
                  <Link to={`/cryptocurrency/${crypto.id}`}>{crypto.name}</Link>
                </td>
                <td>{crypto.symbol}</td>
              </tr>
            ))}
          </tbody>
        </table>
          </>
        )} 
    </div>
    );
}

export default CryptoList;