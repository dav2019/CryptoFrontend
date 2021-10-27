const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <nav>
            <ul className='pagination' >
                {pageNumbers.map(number =>(
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#.html' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </nav>
    )
}

export default Pagination

