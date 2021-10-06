import React, {useState, useEffect} from 'react';
import {useStore} from '../state/zustand';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import Preloader from './Preloader';

const CryptoList = ({data}) => {

  return (
    <div className="card">

        <h1 className="card-title">List of all crypto's</h1>
          <table className='table'>
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>SYMBOL</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0,99).map((crypto) => (
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
    </div>
    );
}

export default CryptoList;