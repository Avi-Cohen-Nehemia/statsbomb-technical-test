import React, { Component } from "react";
import SBTable from "./../SBTable";

class TopTeamsTable extends Component {

    render() {

        const { data, top, by } = this.props;
        const headers = ["team_name", "total_goals", "total_wins"]

        return(
            <SBTable
                tableHeaders={ headers }
                tableData={ data }
                top={ top }
                by={ by }
            />
        )
    }
}

export default TopTeamsTable;
