import React, { useState, useEffect } from 'react'

const useSearch = ({ isMarket, loading, marketCoins }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    console.log(marketCoins)

    useEffect(() => {
        // if (!marketCoins) {
        //     return null
        // }
        if (isMarket && !loading) {
            // console.log('here')
            setData(marketCoins)
        }
        if (search.length === 0) {
            // console.log(marketCoins )
            setData(marketCoins)
        } else {
            const filter = marketCoins.filter((coin) => {
                return Object.values(coin)
                    .join(' ')
                    .toLowerCase()
                    .match(search.toLowerCase())
            })
            setData(filter)
        }
    }, [search, marketCoins])

    return { data, search, setSearch }
}

export default useSearch
