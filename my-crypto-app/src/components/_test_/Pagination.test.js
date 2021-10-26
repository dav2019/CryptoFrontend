import { render, screen, cleanup } from '@testing-library/react';
import Pagination from '../Pagination';

test('should render Pagination component', async () => {
    const totalCoins = 100;
    const coinsPerPage = 10;
    render(<Pagination totalCoins={totalCoins} coinsPerPage={coinsPerPage}/>);
    const paginationElement = screen.getByText('1');
    expect(paginationElement).toBeInTheDocument();
})