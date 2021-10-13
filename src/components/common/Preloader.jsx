import React from 'react'
import { usePreloaderStyles } from './styles'
import { ReactComponent as BlueCat } from '../../images/blue_cat_preloader.svg'

function Preloader() {
    const classes = usePreloaderStyles()
    return (
        <div className={classes.loading}>
            <BlueCat />
        </div>
    )
}

export default Preloader
