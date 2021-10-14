// REACT
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import Alert from '../common/Alert'
import Preloader from '../common/Preloader'
import Pagination from '../pagination/Pagination'

// MATERIAL-UI
import { Grid, Paper } from '@material-ui/core'

// OTHER
import { useCoinInfo } from '../../state/zustand'

const CryptoNews = (props) => {
    const { pageSize } = props
    const { news, fetchNews, loading, error } = useCoinInfo()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        if (news.length === 0 || loading) {
            fetchNews()
        }
    }, [fetchNews, loading])

    const currentNewsData = () => {
        const firstPageIndex = (currentPage - 1) * pageSize
        const lastPageIndex = firstPageIndex + pageSize
        return news.data.slice(firstPageIndex, lastPageIndex)
    }

    if (loading) {
        return <Preloader />
    } else if (error) {
        return <Alert variant="danger">{error}</Alert>
    }

    return (
        <>
            {news.length !== 0 && (
                <>
                    {currentNewsData().map((item) => (
                        <Paper
                            key={item.website}
                            elevation={4}
                            style={{ margin: 10, padding: 10 }}
                        >
                            <Grid
                                container
                                alignItems="center"
                                style={{
                                    width: '100%',
                                }}
                            >
                                <Grid item md={4}>
                                    <img
                                        src={item.screenshot}
                                        width="400"
                                        alt={`${item.title}`}
                                    />
                                </Grid>

                                <Grid item md={8}>
                                    <Grid item>
                                        <h4>{item.title}</h4>
                                    </Grid>
                                    <Grid item>
                                        <p>{item.description}</p>
                                    </Grid>
                                    <Grid item>
                                        <Link to={item.website}>
                                            {item.website}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))}
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={news.count}
                        pageSize={pageSize}
                        onPageChange={(page) => setCurrentPage(page)}
                    />
                </>
            )}
        </>
    )
}

export default CryptoNews
