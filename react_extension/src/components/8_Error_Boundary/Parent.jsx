import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
    state = {
        hasError: "",
    };

    static getDerivedStateFromError(error) {
        // console.log(error);
        return { hasError: error };
    }

    componentDidCatch() {
        console.log("ERROR OCCURRED");
    }

    render() {
        return (
            <div>
                <h2>This is the parent component</h2>
                {this.state.hasError ? (
                    <h1>Network busy, please try again later</h1>
                ) : (
                    <Child />
                )}
            </div>
        );
    }
}
