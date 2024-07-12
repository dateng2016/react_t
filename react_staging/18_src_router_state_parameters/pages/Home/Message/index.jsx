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
    render() {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {messageArr.map((msgObj) => {
                        return (
                            <li key={msgObj.id}>
                                {/* <Link
                                    to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}
                                >
                                    {msgObj.title}
                                </Link> */}
                                {/* <Link
                                    to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}
                                >
                                    {msgObj.title}
                                </Link> */}

                                <Link
                                    to={{
                                        pathname: "/home/message/detail/",
                                        state: {
                                            id: msgObj.id,
                                            title: msgObj.title,
                                        },
                                    }}
                                >
                                    {msgObj.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                {/* <Route
                    path="/home/message/detail/:id/:title"
                    component={Detail}
                /> */}
                <Route path="/home/message/detail/" component={Detail} />
            </div>
        );
    }
}
