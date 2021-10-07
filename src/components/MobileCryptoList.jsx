import React, {useState, useEffect, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {useMarket} from '../state/zustand';
import {Link} from 'react-router-dom';
import Alert from './Alert';
import Preloader from './Preloader';
import Pagination from './Pagination';
import Filter from './Filter';
import { handleLargeNumbers } from '../util/helper/helperFuctions';
import { MasonryGrid } from "@egjs/react-grid";

const MobileCryptoList = () => {

    const { coins, getCoins, loading, error } = useMarket();
    const [currency, setCurrency] = useState('AUD');
    
    useEffect(() => {
        getCoins(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    }, [currency]);

  return (
    <MasonryGrid
        className="container"
        gap={10}
        defaultDirection={"end"}
        align={"center"}
        column={2}
        columnSize={200}
        columnSizeRatio={0}
    >
        {coins.length > 0 && coins.map((crypto, index) => (
            <>
                <div key={crypto.id} className="item">
                    <img src={crypto.image} width="30" alt={`${crypto.name} image`}/>
                    <h4>{crypto.name}</h4>
                    <h5>{crypto.symbol}</h5>
                    <h5>$ {crypto.current_price.toLocaleString()}</h5>
                </div>
            </>
        ))}
    </MasonryGrid>
  );
};

export default MobileCryptoList;
