import React, { Component } from "react";

export default class Count extends Component {
    state = { count: 0 };

    increment = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({ count: count + value * 1 });
    };

    decrement = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        this.setState({ count: count - value * 1 });
    };

    incrementIfOdd = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        if (count % 2 != 0) {
            this.setState({ count: count + value * 1 });
        }
    };

    incrementAsync = () => {
        const { value } = this.selectNumber;
        const { count } = this.state;
        setTimeout(() => {
            this.setState({ count: count + value * 1 });
        }, 500);
    };

    render() {
        return (
            <div>
                <h1>Current Sum: {this.state.count}</h1>
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
