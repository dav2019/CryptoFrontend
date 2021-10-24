import { Table } from 'react-bootstrap'

const CoinsLayout = ({ image, cryptoName, symbol, price }) => {
    return (
        <Table responsive>
            <tbody>
                <tr>
                    <td><img src={image} alt='crypto'/></td>
                    <td>{cryptoName}</td>
                    <td>{symbol}</td>
                    <td>${price}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default CoinsLayout
