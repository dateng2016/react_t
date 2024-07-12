import React, { Component } from "react";
import "./index.css";
import { any } from "prop-types";

export default class Item extends Component {
    state = { mouse: false };

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        };
    };

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        };
    };

    handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            this.props.deleteTodo(id);
        }
    };

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state;
        // console.log("Item: ", this.props);
        return (
            <li
                style={{ backgroundColor: mouse ? "#ddd" : "white" }}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{name}</span>
                </label>
                <button
                    onClick={() => this.handleDelete(id)}
                    className="btn btn-danger"
                    style={{ display: mouse ? "block" : "none" }}
                >
                    删除
                </button>
            </li>
        );
    }
}
