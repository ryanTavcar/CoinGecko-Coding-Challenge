import React from 'react'
import { useAlertStyles } from './styles'

function Alert(props) {
    const { variant } = props
    const classes = useAlertStyles()

    return (
        <div className={`alert alert-${variant.toLowerCase() || 'info'}`}>
            {props.children}
        </div>
    )
}

export default Alert
