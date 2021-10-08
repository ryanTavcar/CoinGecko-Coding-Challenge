// REACT
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
// ZUSTAND
import { useCoinInfo } from '../state/zustand'

// COMPONENTS
import Preloader from '../components/Preloader'
import Alert from '../components/Alert'
// MATERIAL-UI

const Cryptocurrency = () => {
    const { id } = useParams()
    const { pathname } = useLocation()
    const { coin, getCoin, loading, error } = useCoinInfo()

    useEffect(() => {
        if (!coin || loading) {
            getCoin(
                `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=aud&days=1&interval=1m`
            )
        }
    }, [coin, id, pathname])

    return (
        <>
            {loading ? (
                <Preloader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <>
                    {coin && (
                        <>
                            <p>test</p>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Cryptocurrency
