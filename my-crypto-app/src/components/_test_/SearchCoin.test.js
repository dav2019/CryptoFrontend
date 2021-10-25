import { render, screen, cleanup } from '@testing-library/react';
import SearchCoin from '../SearchCoin';

test('should render SearchCoin component', () => {
    render(<SearchCoin/>);
    const searchCoinElement = screen.getByTestId('searchCoin-1');
    expect(searchCoinElement).toHaveTextContent('');
})