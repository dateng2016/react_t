import React, { Component, PureComponent } from "react";
import "./index.css";

export default class Parent extends PureComponent {
    state = { carName: "Benz" };
    changeCar = () => {
        this.setState({ carName: "Mamba" });
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextProps, nextState);
    //     // console.log(this.props, this.state);
    //     if (this.state.carName === nextState.carName) {
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        console.log("Parent---render");
        const { carName } = this.state;
        return (
            <div className="parent">
                <h3>This is the Parent Component</h3>
                <span>The name of my car is {carName}</span> <br />
                <button onClick={this.changeCar}>Click to Change Car</button>
                <Child carName={carName} />
            </div>
        );
    }
}

class Child extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextProps, nextState);
    //     // console.log(this.props, this.state);
    //     if (this.props.carName === nextProps.carName) {
    //         return false;
    //     }
    //     return true;
    // }

    render() {
        console.log("Child--render");
        return (
            <div className="child">
                <h3>This is the Child Component</h3>
                <span>I received car: {this.props.carName}</span>
            </div>
        );
    }
}
