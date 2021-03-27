import { connect } from "react-redux";
import TopPlayersTable from "./TopPlayersTable";

const mapStateToProps = (state) => {
    return {
        data: state.statsByPlayer.stats,
        top: state.statsByPlayer.top,
        by: state.statsByPlayer.by,
    };
};

export default connect(mapStateToProps, null)(TopPlayersTable);
