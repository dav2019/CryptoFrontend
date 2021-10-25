// import CoinsLayout from "./CoinsLayout";
import { Spinner, Table } from 'react-bootstrap'

const Coins = ({ coins, loading }) => {
    if(loading) {
        return <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>;
    }

    return (
        <>
        {coins.map((coin) => {
          return (
            <Table responsive>
              <tbody>
                <tr>
                    <td><img src={coin.image} alt='crypto' width={171} height={180} thumbnail/></td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>${coin.current_price}</td>
                </tr>
              </tbody>
          </Table>
          )
        })}
      </> 
    )
    
}

export default Coins

