import React from 'react'

const Pagination = ({ characterPerPage, totalCharacters }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCharacters / characterPerPage); i++) {
        pageNumbers.push(i)
    }

    return (

        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <a href="!" className="page-link"></a>
                            {number}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}


export default Pagination