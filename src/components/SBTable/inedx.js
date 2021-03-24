import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class SBTable extends Component {

    render() {

        const { tableHeaders, data } = this.props

        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        { tableHeaders.map((header, index) => (
                            <th key={ index }>{ header }</th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    { data.map((dataPoint, index) => (
                        <tr key={ index }>
                            { tableHeaders.map((header) => (
                                <td>{ dataPoint[header] }</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default SBTable;
