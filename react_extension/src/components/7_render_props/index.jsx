import React, { Component } from "react";
import "./index.css";

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>This is the Parent Component</h3>
                <A />
            </div>
        );
    }
}

class A extends Component {
    render() {
        return (
            <div className="a">
                <h3>This is the A Component</h3>
                <B />
            </div>
        );
    }
}
class B extends Component {
    render() {
        return (
            <div className="b">
                <h3>This is the B Component</h3>
            </div>
        );
    }
}
