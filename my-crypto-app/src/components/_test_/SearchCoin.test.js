import { render, screen, cleanup } from '@testing-library/react';
import SearchCoin from '../SearchCoin';

test('should render SearchCoin component', async () => {
    const query = 'Solana';
    render(<SearchCoin getQuery={query}/>);
    const searchCoinElement = screen.getByTestId('searchCoin-1');
    expect(searchCoinElement).toBeInTheDocument();
})