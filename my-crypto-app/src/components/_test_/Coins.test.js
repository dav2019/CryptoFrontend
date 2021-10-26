import { render, screen, cleanup } from '@testing-library/react';
import Coins from '../Coins';


test('should render coins map component', async () => {
    const coin = [ { image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', name: 'Bitcoin', symbol: 'BTC', current_price: 80000 }, { image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', name: 'Ethereum', symbol: 'ETH', current_price: 5000 }]
    render(<Coins coins={coin}/>);
    const coinElement = screen.getByText('Bitcoin');
    expect(coinElement).toBeInTheDocument();
})
