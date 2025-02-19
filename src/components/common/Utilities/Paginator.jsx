import React, { useState } from 'react';
import s from './Paginator.module.css'
import cn from 'classnames'

const Paginator = ({ totalItemsCount, currentPage, onPageChange, itemsPerPage = 10, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemsCount / itemsPerPage);
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}> Prev </button>}

            {pages
                .filter(p => (leftPortionPageNumber <= p && p <= rightPortionPageNumber))
                .map((p) => {
                    return <span className={cn(
                        {[s.selectedPage]: currentPage === p}, s.pageNumber
                        )}
                        key={p}
                        onClick={(e) => {
                            onPageChange(p)
                        }}>{p}</span>
                })}

            {portionNumber < portionCount &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>
    )
}



export default Paginator