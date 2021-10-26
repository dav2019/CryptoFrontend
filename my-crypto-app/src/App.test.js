import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header tag', () => {
    render(<App />);
    const headerElement = screen.getByText('Cryptocurrency');
    expect(headerElement).toBeInTheDocument();
});






