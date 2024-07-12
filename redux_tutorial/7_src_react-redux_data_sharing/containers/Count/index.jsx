import { connect } from "react-redux";

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
} from "../../redux/actions/count";

import React, { Component } from "react";

class Count extends Component {
    // state = { count: 0 };
    state = { carName: "BMW" };

    increment = () => {
        const { value } = this.selectNumber;
        this.props.jia(value * 1);
    };

    decrement = () => {
        const { value } = this.selectNumber;
        this.props.jian(value * 1);
    };

    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1);
        }
    };

    incrementAsync = () => {
        const { value } = this.selectNumber;
        this.props.jiaAsync(value * 1, 500);
    };

    render() {
        return (
            <div>
                <h2>
                    This is Count Component, the number of total people in the
                    component below is {this.props.renshu}
                </h2>
                <h3>Current Sum: {this.props.count}</h3>
                <select
                    ref={(c) => {
                        this.selectNumber = c;
                    }}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>{" "}
                &nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>Add when odd</button>
                &nbsp;
                <button onClick={this.incrementAsync}>Async add</button>&nbsp;
            </div>
        );
    }
}

// export default connect(
//     (state) => ({ count: state }),
//     (dispatch) => ({
//         jia: (number) => dispatch(createIncrementAction(number)),
//         jian: (number) => dispatch(createDecrementAction(number)),
//         jiaAsync: (number, time) =>
//             dispatch(createIncrementAsyncAction(number, time)),
//     })
// )(CountUI);

export default connect(
    (state) => ({ count: state.he, renshu: state.rens.length }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count);
