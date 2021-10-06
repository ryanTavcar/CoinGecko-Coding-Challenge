import React from 'react'
import {useStore} from '../state/zustand';

const Filter = ({setFilter,setUrl}) => {
    const { resetCoins, coins } = useStore();

    const handleTrending = () => {
        resetCoins();
        setUrl('https://api.coingecko.com/api/v3/search/trending')
        setFilter('trending')
        console.log('coins', coins)
    };
    const handleHome = () => {
        resetCoins();
        setUrl('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        setFilter('all')
        console.log('coins', coins)
    };

    return (
        <div>
            <button onClick={handleHome}>home</button>
            <button onClick={handleTrending}>trending</button>
        </div>
    )
}

export default Filter
