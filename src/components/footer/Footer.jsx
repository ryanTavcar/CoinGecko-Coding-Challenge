import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import Grid from '@material-ui/core/Grid'
import { useFooterStyles } from './styles'

const Footer = () => {
    const classes = useFooterStyles()

    return (
        <Grid
            component="footer"
            container
            align="center"
            justifyContent="center"
            className={classes.container}
        >
            <Grid item xs={12} md={4}></Grid>
            <Grid
                item
                xs={12}
                md={4}
                container
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={2} md={1} style={{ margin: '0rem 0.3rem' }}>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'black' }}
                    >
                        <i>
                            <AiFillFacebook size={40} />
                        </i>
                    </Link>
                </Grid>
                <Grid item xs={2} md={1} style={{ margin: '0rem 0.3rem' }}>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'black' }}
                    >
                        <i>
                            <AiFillYoutube size={40} />
                        </i>
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}></Grid>

            <Grid
                container
                item
                xs={12}
                md={6}
                align="center"
                justifyContent="center"
                style={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '700',
                }}
            >
                Melbourne, Australia
            </Grid>
            <Grid item xs={12} md={6}>
                <Link
                    to="mailto:info@resorter.app"
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: 'black',
                    }}
                >
                    info@cryptograb.com.au
                </Link>
            </Grid>

            <Grid
                item
                xs={12}
                align="center"
                style={{
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    fontWeight: '700',
                }}
            >
                Copyright 2021 - cryptograb - All Rights Reserved
            </Grid>
        </Grid>
    )
}

export default Footer
