import React, { Component } from "react";

export default class Demo extends Component {
    state = { count: 0 };

    // add = () => {
    //     const { count } = this.state;

    //     this.setState({ count: count + 1 }, () => {
    //         console.log("Callback:", this.state.count);
    //     });
    //     console.log("Method:", this.state.count);
    // };

    add = () => {
        this.setState((state, props) => {
            console.log(state, props);
            return { count: state.count + 1 };
        });
    };

    render() {
        return (
            <div>
                <h1>Current sum is: {this.state.count}</h1>
                <button onClick={this.add}>Click me to add 1</button>
            </div>
        );
    }
}
