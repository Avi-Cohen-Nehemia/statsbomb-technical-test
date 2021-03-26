import { connect } from "react-redux";
import ComparisonChart from "./ComparisonChart";
import { selectTeam } from "./../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        allTeams: state.statsByTeam.stats,
        teamsToCompare: state.teamComparison.teamsToCompare,
        compareBy: state.teamComparison.compareBy
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectTeam: (data) => dispatch(selectTeam(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComparisonChart);
