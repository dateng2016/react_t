import React, { Component } from "react";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import "./App.css";
import { any } from "prop-types";

export default class App extends Component {
    state = {
        todos: [
            { id: "001", name: "Eating", done: true },
            { id: "002", name: "Sleeping", done: true },
            { id: "003", name: "Coding", done: false },
            { id: "004", name: "Shopping", done: true },
        ],
    };

    addTodo = (todoObj) => {
        const { todos } = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({ todos: newTodos });
    };

    updateTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return { ...todoObj, done };
            else return todoObj;
        });
        this.setState({ todos: newTodos });
    };

    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        this.setState({ todos: newTodos });
    };

    checkAllTodo = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done };
        });
        this.setState({ todos: newTodos });
    };

    clearAllDone = () => {
        const { todos } = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });

        this.setState({ todos: newTodos });
    };

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List
                        todos={todos}
                        updateTodo={this.updateTodo}
                        deleteTodo={this.deleteTodo}
                    />
                    <Footer
                        todos={todos}
                        checkAllTodo={this.checkAllTodo}
                        clearAllDone={this.clearAllDone}
                    />
                </div>
            </div>
        );
    }
}
