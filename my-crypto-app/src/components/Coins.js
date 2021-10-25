import CoinsLayout from "./CoinsLayout";
import { Spinner } from 'react-bootstrap'

const Coins = ({ coins, loading }) => {
    if(loading) {
        return <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>;
    }

    return (
        <>
        {coins.map(coin => {
          return <CoinsLayout 
          image={coin.image}
          cryptoName={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          />
        })}
      </> 
    )
    
}

export default Coins

