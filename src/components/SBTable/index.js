import React, { Component } from "react";
import Table from 'react-bootstrap/Table'

class SBTable extends Component {

    constructor(props) {

        super(props);

        this.getTopResults = this.getTopResults.bind(this);
    }

    // sort and filter results by selected amount and column
    getTopResults(data, amount, column) {

        const sortedData = data.sort((dataPointA, dataPointB) => {
            return dataPointB[column] - dataPointA[column];
        });

        const topResults = sortedData.filter((_, index) => {
            return index < amount;
        })

        return topResults;
    }

    render() {

        const { tableHeaders, tableData, top, by } = this.props

        return(
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        { tableHeaders.map((header, index) => (
                            <th key={ index }>{ header.replace(/_/g, ' ') }</th>
                        )) }
                    </tr>
                </thead>
                <tbody>
                    { this.getTopResults(tableData, top, by).map((dataPoint, index) => (
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
