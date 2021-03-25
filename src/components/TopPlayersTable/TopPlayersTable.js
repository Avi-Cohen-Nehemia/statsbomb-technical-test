import React, { Component } from "react";
import SBTable from "./../SBTable";

class TopPlayersTable extends Component {

    render() {

        const { data, top, by } = this.props;

        return(
            <SBTable
                tableHeaders={ ["player_name", "country_name", "total_shots", "total_goals", "average_team_possession_percentage"] }
                tableData={ data }
                top={ top }
                by={ by }
            />
        )
    }
}

export default TopPlayersTable;
