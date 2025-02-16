import { any } from "prop-types";
import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
    search = () => {
        const {
            keyWordElement: { value: keyWord },
        } = this;
        // console.log(keyWord);
        this.props.updateAppState({ isFirst: false, isLoading: true });
        axios
            .get(`http://localhost:3000/search/users?q=${keyWord}`)
            .then((response) => {
                // console.log("Sucess", response.data);
                this.props.updateAppState({
                    isLoading: false,
                    users: response.data.items,
                });
            })
            .catch((error) => {
                // console.log("Failure", error);
                this.props.updateAppState({
                    isLoading: false,
                    err: error.message,
                });
            });
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input
                        ref={(c) => (this.keyWordElement = c)}
                        type="text"
                        placeholder="enter the name you search"
                    />
                    &nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}
