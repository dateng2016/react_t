import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
    state = {
        messageArr: [
            { id: "01", title: "Message 1" },
            { id: "02", title: "Message 2" },
            { id: "03", title: "Message 3" },
        ],
    };

    go = () => {
        this.props.history.go(0);
    };

    back = () => {
        this.props.history.goBack();
    };

    forward = () => {
        this.props.history.goForward();
    };

    replaceShow = (id, title) => {
        this.props.history.replace(`/home/message/detail/${id}/${title}`);
        // the parameters of this method are (path, state)
    };
    pushShow = (id, title) => {
        this.props.history.push(`/home/message/detail/${id}/${title}`);
    };

    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {messageArr.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>
                                <Link
                                    to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}
                                >
                                    {msgObj.title}
                                </Link>
                                &ensp;
                                <button
                                    onClick={() => {
                                        this.pushShow(msgObj.id, msgObj.title);
                                    }}
                                >
                                    Push Check
                                </button>{" "}
                                &ensp;
                                <button
                                    onClick={() =>
                                        this.replaceShow(
                                            msgObj.id,
                                            msgObj.title
                                        )
                                    }
                                >
                                    Replace Check
                                </button>
                                {/* <Link
                                    to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}
                                >
                                    {msgObj.title}
                                </Link> */}
                                {/* <Link
                                    replace={true}
                                    to={{
                                        pathname: "/home/message/detail/",
                                        state: {
                                            id: msgObj.id,
                                            title: msgObj.title,
                                        },
                                    }}
                                >
                                    {msgObj.title}
                                </Link> */}
                            </li>
                        );
                    })}
                </ul>
                <hr />
                {/* <Route
                    path="/home/message/detail/:id/:title"
                    component={Detail}
                /> */}
                <Route
                    path="/home/message/detail/:id/:title"
                    component={Detail}
                />
                <button onClick={this.back}>Go Back</button>
                <button onClick={this.forward}>Go Forward</button>
                <button onClick={this.go}>Go</button>
            </div>
        );
    }
}
