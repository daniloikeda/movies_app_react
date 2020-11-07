import React from 'react';
import _  from "lodash";

const Pagination = (props) => {
    var { totalItems, pageSize, currentPage, handlePageChange } = props;
    const pageCounter = Math.ceil(totalItems/pageSize);
    const pages = _.range(1, pageCounter + 1);
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination" style={{justifyContent:"center"}}>
                {pages.map((page) => (
                    <li key={page} className={page === currentPage ? "page-item active" : "active"}>
                        <a className="page-link" href="/#" onClick={() => handlePageChange(page)}>{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;