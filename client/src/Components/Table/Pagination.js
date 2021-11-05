import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import { useState, useEffect, useMemo } from 'react'

const Pagination = ({ total, currentPage, onChangePage, postPerPage=3 }) => {

    const [totalPage, setTotalPage] = useState(0);

    // When sorting or filtering while get count total page of data
    useEffect(() => {
        if (total > 0 && postPerPage > 0) {
            setTotalPage(Math.ceil(total / postPerPage))
        }
    }, [total, postPerPage])


    // Pagination
    const paginate = useMemo(() => {
        let page = [];

        for (let i = 1; i <= totalPage; i++) {
            page.push(i)
        }
        return page;

    }, [totalPage])



    return (
        <div className="pagination">
            <ul>
                <button onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1}> <FaAngleLeft /> </button>
              { paginate.map((i) =>{
                  return(
                      <li key={i} onClick={() => onChangePage(i)} className={i === currentPage ? "active": ''}> {i} </li>
                  )
              }) }
               <button onClick={() => onChangePage(currentPage + 1)}> <FaAngleRight /> </button>
            </ul>
        </div>
    )
}

export default Pagination
