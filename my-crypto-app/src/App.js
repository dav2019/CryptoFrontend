import { Container, Row, Col, Navbar, Nav, Table} from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coins from './components/Coins';
import Pagination from './components/Pagination';
import SearchCoin from './components/SearchCoin';


function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const [getQuery, setGetQuery] = useState('');
  

  useEffect(() => {
    const fetchCoins = async () => {
      const searchInput = (getQuery) ? `&ids=${getQuery.toLowerCase()}` : '';
      setLoading(true);
      try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud${searchInput}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
      setCoins(res.data);
      // console.log(res.data);
      setLoading(false);
      } catch(error) {
        alert('Error Error');
        console.log("error", error);
      }
    }

    fetchCoins();
  }, [getQuery]);

  // useEffect(() => {
  //   const fetchCoins = async () => {
  //     setLoading(true);
  //     try {
  //     const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  //     setCoins(res.data);
  //     // console.log(res.data);
  //     setLoading(false);
  //     } catch(error) {
  //       alert('Error Error');
  //       console.log("error", error);
  //     }
  //   }

  //   fetchCoins();
  // }, []);

  // useEffect(() => {
  //   const search = async () => {
  //     setLoading(true);
  //     try {
  //     const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&ids=${searchInput.toLowerCase()}&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
  //     setCoins(res.data);
  //     // console.log(res.data);
  //     // console.log(searchInput);
  //     setLoading(false);
  //     } catch(error) {
  //       alert('Error Error');
  //       console.log("error", error);
  //     }
  //   }

  //   search();
  // }, [searchInput]);


  // Pagination Set Up
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  // Allows user to search a coin while on a different page and shows different coins for every page number
  const currentCoins = (getQuery) ? coins : coins.slice(indexOfFirstCoin, indexOfLastCoin);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid>
      <Row>
        <Navbar bg='dark' variant='dark' expand='lg'>
          <Container fluid>
          <Navbar.Brand href='#home'>Cryptocurrency</Navbar.Brand>
            <Nav className='me-auto'>
            <Nav.Link href='#home'>Trending</Nav.Link>
          </Nav>
          <SearchCoin getQuery={(q) => setGetQuery(q)}/>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col>
          <Table striped border hover responsive='sm'>
            <thead>
              <tr>
                <th>Crypto Image</th>
                <th>Crypto Name</th>
                <th>Crypto Symbol</th>
                <th>Current Price $AUD</th>
              </tr>
            </thead>
            <Coins coins={currentCoins} loading={loading} />
          </Table>
        </Col>
      </Row>
      <Row>
        <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate}/>
      </Row>
    </Container>
  );
}

export default App;
