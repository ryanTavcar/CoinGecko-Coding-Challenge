import React from 'react'
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
            // xs={12}
            // spacing={2}
            justifyContent="center"
            className={classes.container}
        >
            <Grid item xs={12} md={4}>
                {/* <Link className="terms" to={`/term-privacy/term-of-use`}>
                    Terms of Use
                  </Link> */}
                {/* <TermsOfUse type="footer" /> */}
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                container
                alignItems="center"
                // spacing={3}
                justifyContent="center"
            >
                <Grid item xs={2} md={1} style={{ margin: '0rem 0.3rem' }}>
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'black' }}
                    >
                        {/* <i
                  className="fab fa-facebook "
                  style={{ fontSize: "30px", color: "black" }}
                /> */}
                        <i>
                            <AiFillFacebook size={40} />
                        </i>
                    </a>
                </Grid>
                <Grid item xs={2} md={1} style={{ margin: '0rem 0.3rem' }}>
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'black' }}
                    >
                        <i>
                            <AiFillYoutube size={40} />
                        </i>
                    </a>
                </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
                {/* <Link
                    className="privacy"
                    to={`/term-privacy/privacy-statement`}
                  >
                    Privacy Statement
                  </Link> */}
                {/* <PrivacyStatement type="footer" /> */}
            </Grid>

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
                <a
                    href="mailto:info@resorter.app"
                    style={{
                        fontFamily: 'Roboto',
                        fontSize: '16px',
                        fontWeight: '700',
                        color: 'black',
                    }}
                >
                    info@cryptograb.com.au
                </a>
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
