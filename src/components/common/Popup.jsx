import React, { useState } from 'react'
import {
    Grid,
    Button,
    IconButton,
    Typography,
    Popover,
    Card,
    Modal,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useGeneralState } from '../../state/zustand'
import { useModalStyles } from './styles'

const Popup = (props) => {
    const { isOpen } = props
    const classes = useModalStyles()
    const { setIsModalOpen } = useGeneralState()

    const handleModalClose = () => setIsModalOpen()

    return (
        <Modal
            open={isOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card className={classes.modal}>
                <Grid container direction="row" justify="center" item>
                    <Grid
                        container
                        justifyContent="space-evenly"
                        alignItems="center"
                        style={{ padding: '2rem 0px' }}
                    >
                        <Grid item xs={8}>
                            <Typography
                                variant="h5"
                                style={{ fontFamily: 'PT Sans Narrow' }}
                            >
                                Coming Soon | Work in Progress
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <IconButton
                                onClick={handleModalClose}
                                className={classes.iconbutton}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Modal>
    )
}

export default Popup
