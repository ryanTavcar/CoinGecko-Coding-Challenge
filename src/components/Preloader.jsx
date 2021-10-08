import React from 'react'
import { ReactComponent as BlueCat } from '../images/blue_cat_preloader.svg'

function Preloader() {
    return (
        <div className="loading">
            <BlueCat />
        </div>
    )
}

export default Preloader
