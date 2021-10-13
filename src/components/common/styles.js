import { makeStyles } from '@material-ui/core/styles'

export const useAlertStyles = makeStyles((theme) => ({
    alert: {
        padding: '1rem',
        border: '0.1rem solid transparent',
        borderRadius: '0.5rem',
    },
    alertInfo: {
        color: '#323232',
        backgroundColor: '#6184c469',
    },
    alertDanger: {
        color: '#a02020',
        backgroundColor: '#ffe0e0',
    },
    alertSuccess: {
        color: '#20a020',
        backgroundColor: '#eeffe0',
    },
}))

export const usePreloaderStyles = makeStyles((theme) => ({
    loading: {
        display: 'block !important',
    },
}))

export const useModalStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
    },
}))
