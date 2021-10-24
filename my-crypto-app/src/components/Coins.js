import CoinsLayout from "./CoinsLayout";

const Coins = ({ coins, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>;
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

