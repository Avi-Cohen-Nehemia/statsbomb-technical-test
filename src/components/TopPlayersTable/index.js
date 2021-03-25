import { connect } from "react-redux";
import TopPlayersTable from "./TopPlayersTable";

const mapStateToProps = (state) => {
    return {
        data: state.statsByPlayer.stats,
        top: state.statsByPlayer.top,
        by: state.statsByPlayer.by,
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addTransaction: (data) => dispatch(addTransaction(data)),
//         logoutUser: () => {
//             dispatch(logout());
//             history.push("/");
//         }
//     };
// };

export default connect(mapStateToProps, null)(TopPlayersTable);
