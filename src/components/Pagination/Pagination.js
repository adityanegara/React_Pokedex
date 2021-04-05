import React from 'react';
const Pagination = ({onPreviousClick, onNextClick}) =>{
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-3">
                <li className="page-item ">
                    <a className="page-link" onClick = {onPreviousClick} href="#" tabindex="-1">Previous</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick = {onNextClick} href="#">Next</a>
                </li>
            </ul>
            </nav>
    )
}

export default Pagination;