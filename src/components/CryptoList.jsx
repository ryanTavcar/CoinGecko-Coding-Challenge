import React, {useState, useEffect} from 'react';
import {useStore} from '../state/zustand';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import Preloader from './Preloader';

const CryptoList = () => {
  const { coin, getCoins, loading, error } = useStore();
  const [url, setUrl] = useState('https://api.coingecko.com/api/v3/coins/list?include_platform=false')

  const changeTrending = () => {
    setUrl('https://api.coingecko.com/api/v3/search/trending')
  };
  console.log(coin)
  useEffect(() => {
      getCoins(url)
  }, [url])

  return (
    <div className="card">

        <h1 className="card-title">List of all crypto's</h1>

        <button onClick={changeTrending}>trending</button>

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
                  {/* <th>IS ADMIN</th>
                  <th>ACTIONS</th> */}
                </tr>
              </thead>
              <tbody>
                {coin.map((crypto) => (
                  <tr key={crypto.id}>
                    <td>{crypto.id}</td>
                    <td>
                      <Link to={`/cryptocurrency/${crypto.id}`}>{crypto.name}</Link>
                    </td>
                    <td>{crypto.symbol}</td>
                    {/* <td>{user.isAdmin ? <strong>YES</strong> : 'NO'}</td> */}
                    <td>
                      {/* <button
                        type='button'
                        className='small'
                        onClick={() =>
                          props.history.push(`/profile/${user._id}/settings`)
                        }
                      >
                        Edit
                      </button> */}

                      {/* <button
                        type='button'
                        className='small'
                        onClick={() => deleteHandler(user)}
                      >
                        Delete
                      </button> */}
                    </td>
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