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
            <div
                style={{
                    width: "48%",
                    maxHeight: "20rem",
                    overflow: "auto"
                }}
                className="text-center"
            >
                <Table
                    striped
                    bordered
                    hover
                    variant="dark"
                >
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
                                { tableHeaders.map((header, index) => (
                                    <td key={ index }>{ dataPoint[header] }</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default SBTable;
