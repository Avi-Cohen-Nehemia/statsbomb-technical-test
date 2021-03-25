import React, { Component } from "react";
import SBTable from "./../SBTable";

class TopPlayersTable extends Component {

    render() {

        const { data } = this.props;

        return(
            <SBTable
                tableHeaders={ ["player_name", "total_shots", "total_goals", "country_name", "average_team_possession_percentage"] }
                tableData={ data }
            />
        )
    }
}

export default TopPlayersTable;
