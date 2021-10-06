import React, {useState, useEffect} from 'react';
import {useStore} from '../state/zustand';
import CryptoList from '../components/CryptoList';
import Filter from '../components/Filter';
import Alert from '../components/Alert';
import Preloader from '../components/Preloader';
import Trending from '../components/Trending';
import Header from '../components/Header';

const Home = () => {

    const { coins, getCoins, loading, error } = useStore();
    const [url, setUrl] = useState('');
    const [filter, setFilter] = useState('')

    useEffect(() => {
        getCoins(url)
    }, [url]);

    return (
        <div>
            <Header/>
            <Filter setFilter={setFilter} setUrl={setUrl}/>
            {loading ? (
                <Preloader />
                ) : error ? (
                    <Alert variant='danger'>{error}</Alert>
                ) : (
                    <>
                        {filter === 'all' && <CryptoList data={coins}/>}
                        {filter  === 'trending' && <Trending data={coins}/>}
                    </>
                )
            }
        </div>
    )
}

export default Home
