import React from 'react';
import {Link} from 'react-router-dom';

const Trending = ({data}) => {

    console.log(data)
    return (
        <div className="card">

        <h1 className="card-title">List of all crypto's</h1>

        <table className='table'>
        <thead>
            <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SYMBOL</th>
            </tr>
        </thead>
        <tbody>
            {data.coins.map((crypto) => {

            return <tr key={crypto.item.id}>
                <td>{crypto.item.id}</td>
                <td>
                <Link to={`/cryptocurrency/${crypto.item.id}`}>{crypto.item.name}</Link>
                </td>
                <td>{crypto.item.symbol}</td>
                <td>

                </td>
            </tr>
            })}
        </tbody>
        </table>
    
        </div>
    )
}

export default Trending
