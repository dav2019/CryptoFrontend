import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coins from './components/Coins';
import Pagination from './components/Pagination';
import SearchCoin from './components/SearchCoin';


function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState('');
  

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API}`)
  //   .then(res => {
  //     setCoins(res.data)
  //     // console.log(res.data)
  //   })
  //   .catch(error => alert('API is broken!'));
  // })

  useEffect(() => {
    const fetchCoins = async () => {
      setLoading(true);
      try {
      const res = await axios.get(`${process.env.REACT_APP_API}`);
      setCoins(res.data);
      // console.log(res.data);
      setLoading(false);
      } catch(error) {
        alert('Error Error');
        console.log("error", error);
      }
    }

    fetchCoins();
  }, []);

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&ids=${searchInput.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
      setCoins(res.data);
      // console.log(res.data);
      // console.log(searchInput);
      setLoading(false);
      } catch(error) {
        alert('Error Error');
        console.log("error", error);
      }
    }

    search();
  }, [searchInput]);


  // Get coins
  const indexOfLastCoin = currentPage * coinsPerPage;
  // console.log('indexOfLastCoin', indexOfLastCoin);
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  // console.log('indexOfFirstCoin', indexOfFirstCoin);
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row>
        <Col><header className="header"> Cryptocurrency</header></Col>
        <Col><SearchCoin getQuery={(q) => setSearchInput(q)}/></Col>
      </Row>
          <Coins coins={currentCoins} loading={loading} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate}/>
    </Container>
  );
}

export default App;
