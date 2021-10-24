import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import CryptoData from './components/CryptoData';
import Coins from './components/Coins';
import Pagination from './components/Pagination';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API}`)
  //   .then(res => {
  //     setCoins(res.data)
  //     // console.log(res.data)
  //   })
  //   .catch(error => alert('API is broken!'));
  // })

  useEffect(() => {
    const fetchCoins = async () =>{
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API}`);
      setCoins(res.data);
      setLoading(false);
    }

    fetchCoins();
  }, []);
  // Get coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  // console.log(coins)
  return (
    <Container>
      <Row><header className="header"> Cryptocurrency</header></Row>
      <Coins coins={currentCoins} loading={loading} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate}/>
    </Container>
  );
}

export default App;
