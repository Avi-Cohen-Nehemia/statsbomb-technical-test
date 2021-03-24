import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class SBTable extends Component {

    render() {

        const { tableHeaders, tableData } = this.props

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
                    { tableData.map((dataPoint, index) => (
                        <tr key={ index }>
                            <td>{index + 1}</td>
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
