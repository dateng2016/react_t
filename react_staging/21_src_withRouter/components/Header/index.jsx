import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
    go = () => {
        this.props.history.go(0);
    };

    back = () => {
        this.props.history.goBack();
    };

    forward = () => {
        this.props.history.goForward();
    };

    render() {
        return (
            <div>
                <h2>React Router Demo</h2>
                <button onClick={this.back}>Go Back</button>
                <button onClick={this.forward}>Go Forward</button>
                <button onClick={this.go}>Go</button>
            </div>
        );
    }
}

export default withRouter(Header);
