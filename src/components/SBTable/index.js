import React, { Component } from "react";
import PropTypes from "prop-types";
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
            <div className="SBTable-container">
                <Table
                    className="text-capitalize"
                    striped
                    bordered
                    hover
                    variant="dark"
                >
                    <thead>
                        <tr>
                            <th>{"#"}</th>
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

SBTable.propTypes = {
    tableHeaders: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired,
    top: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired
}

export default SBTable;
