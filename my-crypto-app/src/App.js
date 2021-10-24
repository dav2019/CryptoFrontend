import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CryptoData from './components/CryptoData';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}`)
    .then(res => {
      setCoins(res.data)
      // console.log(res.data)
    })
    .catch(error => alert('API is broken!'));
  })

  return (
    <Container>
      <Row><header className="header"> Cryptocurrency</header></Row>
      <>
        {coins.map(coin => {
          return <CryptoData 
          image={coin.image}
          cryptoName={coin.name}
          symbol={coin.symbol}
          price={coin.current_price}
          />
        })}
      </>
    </Container>
  );
}

export default App;
