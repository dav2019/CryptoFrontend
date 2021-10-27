// import CoinsLayout from "./CoinsLayout";
import { Spinner } from 'react-bootstrap'

const Coins = ({ coins, loading }) => {
    if(loading) {
        return <Spinner animation='border' variant='primary' role='status' size='lg'>
                  <span className='visually-hidden'>Loading...</span>
                </Spinner>;
    }

    return (
        <>
        {coins.map((coin) => {
          return (
              <tbody>
                <tr>
                    <td><img src={coin.image} alt='crypto' width={171} height={180} thumbnail/></td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>${coin.current_price}</td>
                </tr>
              </tbody>
          )
        })}
      </> 
    )
    
}

export default Coins

