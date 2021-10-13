import React from 'react'
import Preloader from '../Preloader'
import Alert from '../Alert'

const CheckLoad = (props) => {
    const { loading, error, children } = props

    return (
        <>
            {loading ? (
                <Preloader />
            ) : error ? (
                <Alert variant="danger">{error}</Alert>
            ) : (
                <>{children}</>
            )}
        </>
    )
}

export default CheckLoad
