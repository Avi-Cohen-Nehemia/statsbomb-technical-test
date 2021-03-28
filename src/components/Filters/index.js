import { connect } from "react-redux";
import Filters from "./Filters";
import { updateFilters } from "./../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (data) => dispatch(updateFilters(data)),
    };
};

export default connect(null, mapDispatchToProps)(Filters);
