import React from 'react'
import { usePagination, DOTS } from '../../util/helper/usePagination'
import clsx from 'clsx'
// import Slider from '@mui/material/Slider';
import '../../styles/pagination.css'

const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
    } = props

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    const lastPage = paginationRange[paginationRange.length - 1]

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null
    }

    const onNext = () => {
        onPageChange(currentPage + 1)
    }

    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }

    return (
        <ul
            className={clsx('pagination-container', { [className]: className })}
        >
            {/* Left navigation arrow */}
            <li
                onClick={onPrevious}
                className={clsx('pagination-item', {
                    disabled: currentPage === 1,
                })}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li key={pageNumber} className="pagination-item dots">
                            &#8230;
                        </li>
                    )
                }

                // Render our Page Pills
                return (
                    <li
                        key={pageNumber}
                        className={clsx('pagination-item', {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                )
            })}
            {/*  Right Navigation arrow */}
            <li
                className={clsx('pagination-item', {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    )
}

export default Pagination
