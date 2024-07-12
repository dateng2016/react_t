import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home Content</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* <a
                                className="list-group-item"
                                href="./home-news.html"
                            >
                                News
                            </a> */}
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>

                        <li>
                            {/* <a
                                className="list-group-item"
                                href="./home-message.html"
                            >
                                Message
                            </a> */}
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                    </Switch>
                </div>
            </div>
        );
    }
}
