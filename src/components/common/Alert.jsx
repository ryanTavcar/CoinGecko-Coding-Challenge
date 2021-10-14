import React from 'react'

function Alert(props) {
    const { variant } = props

    return (
        <div className={`alert alert-${variant.toLowerCase() || 'info'}`}>
            {props.children}
        </div>
    )
}

export default Alert
