import { makeStyles } from '@material-ui/core/styles'

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
