import React, { Component } from "react";
import SBTable from "./../SBTable";
import Filters from "./../Filters";

class TopPlayersTable extends Component {

    render() {

        const { data, top, by } = this.props;
        const headers = ["player_name", "country_name", "total_shots", "total_goals"];
        const options = ["total_goals", "total_shots"];

        return(
            <div style={{ width: "48%" }}>
                <Filters
                    options={ options }
                    selectedAmount={ top }
                    selectedOption={ by }
                />
                <SBTable
                    tableHeaders={ headers }
                    tableData={ data }
                    top={ top }
                    by={ by }
                />
            </div>
        )
    }
}

export default TopPlayersTable;
