import React from 'react';
import {Link} from 'react-router-dom';

const Trending = ({data}) => {

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
                    {data.coins && data.coins.map((crypto) => (
                        <tr key={crypto.item.id}>
                            <td><img src={crypto.item.small} width="60" alt={`${crypto.name} image`}/></td>
                            <td>
                            <Link to={`/cryptocurrency/${crypto.item.id}`}>{crypto.item.name}</Link>
                            </td>
                            <td>{crypto.item.symbol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
        </div>
    )
}

export default Trending
