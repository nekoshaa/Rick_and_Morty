import React from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import ShopItemsList from '../ShopItemsList/ShopItemsList'

const Content = ({ }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Имя { }</th>
                    <th>Статус</th>
                    <th>Раса</th>
                    <th>Пол</th>
                    <th>Локация</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </Table>

    )
}

export default Content
