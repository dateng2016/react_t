import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
    getStudentData = () => {
        axios
            .get("http://localhost:3000/students")
            .then((response) => {
                console.log("Successful", response.data);
            })
            .catch((error) => {
                console.log("Failed", error);
            });
    };

    getCarData = () => {
        axios
            .get("http://localhost:3000/students")
            .then((response) => {
                console.log("Successful", response.data);
            })
            .catch((error) => {
                console.log("Failed", error);
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>
                    Click me to obtain student data
                </button>
                <button onClick={this.getCarData}>
                    Click me to obtain car data
                </button>
            </div>
        );
    }
}
