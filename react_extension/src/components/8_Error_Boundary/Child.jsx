import React, { Component } from "react";

export default class Child extends Component {
    state = {
        // users: [
        //     { id: "001", name: "tom", age: 18 },
        //     { id: "002", name: "jack", age: 19 },
        //     { id: "003", name: "peiji", age: 20 },
        // ],
        users: "hahaha",
    };
    render() {
        return (
            <div>
                <h2>This is child component</h2>
                {this.state.users.map((userObj) => {
                    return (
                        <h4 key={userObj.id}>
                            {userObj.name} --- {userObj.age}
                        </h4>
                    );
                })}
            </div>
        );
    }
}
