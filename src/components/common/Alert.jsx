import React from 'react'
import { useAlertStyles } from './styles'

function Alert(props) {
    const { variant } = props
    const classes = useAlertStyles()

    return (
        <div className={(classes.alert, classes.alert`${variant || 'info'}`)}>
            {props.children}
        </div>
    )
}

export default Alert
