import { connect } from "react-redux";
import TopTeamsTable from "./TopTeamsTable";

const mapStateToProps = (state) => {
    return {
        data: state.statsByTeam.stats,
        top: state.statsByTeam.top,
        by: state.statsByTeam.by,
    };
};

export default connect(mapStateToProps, null)(TopTeamsTable);
