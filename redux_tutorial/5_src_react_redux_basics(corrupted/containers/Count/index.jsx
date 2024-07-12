import { connect } from "react-redux";

import CountUI from "../../components/Count";
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from "../../redux/actions/count";

const mapStateToProps = (state) => {
    return { count: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        jia: (number) => dispatch(createIncrementAction(number)),
        jian: (number) => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) =>
            dispatch(createIncrementAsyncAction(number, time)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
