import { connect } from "react-redux";
import TopPlayersTable from "./TopPlayersTable";

const mapStateToProps = (state) => {
    return {
        data: state.statsByPlayer,
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
