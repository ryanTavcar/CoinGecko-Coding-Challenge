// REACT
import React, { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

// MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'

// COMPONENTS
import Pagination from '../pagination/Pagination'

// OTHER
import clsx from 'clsx'
import { handleLargeNumbers } from '../../util/helper/helperFuctions'
import { useTableStyles } from './styles'

const TableCryptoList = (props) => {
    const { data, pageSize } = props

    const classes = useTableStyles()
    const [currentPage, setCurrentPage] = useState(1)
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize

        return data.slice(firstPageIndex, lastPageIndex)
    })

    return (
        <div className={classes.tableContainer}>
            <table className={classes.table}>
                <thead>
                    <tr
                        className={classes.tableRow}
                        style={{ borderBottom: '3px solid #313F4F' }}
                    >
                        <th className={classes.tableItem}>NAME</th>
                        <th className={classes.tableItem}>PRICE</th>
                        <th className={classes.tableItem}>MARKET CAP</th>
                        <th className={classes.tableItem}>TOTAL VOLUME</th>
                        <th className={classes.tableItem}>AVAILABLE SUPPLY</th>
                        <th className={classes.tableItem}>SYMBOL</th>
                    </tr>
                </thead>
                <tbody className={classes.tableRow}>
                    {data &&
                        currentTableData.map((crypto) => (
                            <tr key={crypto.id}>
                                <td className={classes.tableItem}>
                                    <Grid container alignItems="center">
                                        <Grid item style={{ padding: 10 }}>
                                            <img
                                                src={crypto.image}
                                                width={isMobile ? '30' : '40'}
                                                alt={`${crypto.name} image`}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Link
                                                to={`/cryptocurrency/${crypto.id}`}
                                                style={{ color: 'black' }}
                                            >
                                                {crypto.name}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </td>
                                <td className={classes.tableItem}>
                                    <Grid container alignItems="center">
                                        <Grid item>
                                            ${' '}
                                            {crypto.current_price.toLocaleString()}
                                        </Grid>
                                    </Grid>
                                </td>
                                <td className={classes.tableItem}>
                                    $ {handleLargeNumbers(crypto.market_cap)}
                                </td>
                                <td className={classes.tableItem}>
                                    $ {handleLargeNumbers(crypto.total_volume)}
                                </td>
                                <td className={classes.tableItem}>
                                    ${' '}
                                    {handleLargeNumbers(
                                        crypto.circulating_supply
                                    )}{' '}
                                    {crypto.symbol}
                                </td>
                                <td className={classes.tableItem}>
                                    {crypto.symbol}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={data.length}
                pageSize={pageSize}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    )
}

export default TableCryptoList
