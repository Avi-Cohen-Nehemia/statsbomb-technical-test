import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class ComparisonFilter extends Component {

    constructor(props) {

        super(props);

        this.handleSelectTeam = this.handleSelectTeam.bind(this);
        this.handleSelectStat = this.handleSelectStat.bind(this);
    }

    handleSelectTeam(team) {
        this.props.selectTeam(team);
    }

    handleSelectStat(stat) {
        this.props.selectStat(stat);
    }

    render() {

        const { allTeams, selectedStats, selectedTeams } = this.props
        const allStats = ["total_wins", "total_goals", "total_shots"];

        return(
            <div className="d-flex">
                <DropdownButton
                    className="text-capitalize"
                    title="Teams"
                >
                    {allTeams.map((team, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleSelectTeam(team) }
                        >
                            { team.team_name }
                            { selectedTeams.includes(team) ? <i className="fas fa-check ml-2"/> : null }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
                <DropdownButton
                    className="text-capitalize ml-3"
                    title="Compare"
                >
                    {allStats.map((stat, index) => (
                        <Dropdown.Item
                            key={ index }
                            onClick={ () => this.handleSelectStat(stat) }
                        >
                            { stat.replace(/_/g, ' ') }
                            { selectedStats.includes(stat) ? <i className="fas fa-check ml-2"/> : null }
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            </div>
        )
    }
}

export default ComparisonFilter;
