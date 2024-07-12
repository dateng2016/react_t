import React, { Component } from "react";
import "./index.css";

const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

export default class A extends Component {
    state = { username: "Tom", age: 1 };

    render() {
        const { username, age } = this.state;

        return (
            <div className="parent">
                <h3>This is Component A</h3>
                <h4>My username is {username}</h4>
                <Provider value={{ username, age }}>
                    <B />{" "}
                </Provider>
            </div>
        );
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>This is Component B</h3>
                <h4>Username of A is {}</h4>
                <C />
            </div>
        );
    }
}

// class C extends Component {
//     static contextType = MyContext;
//     render() {
//         console.log(this.context);
//         return (
//             <div className="grandchild">
//                 <h3>This is Component C</h3>
//                 <h4>
//                     Username of A is {this.context.username} Age:{" "}
//                     {this.context.age}
//                 </h4>
//             </div>
//         );
//     }
// }

const C = () => {
    return (
        <div className="grandchild">
            <h3>this is Component C</h3>
            <h4>
                Username from A:
                <Consumer>
                    {(value) => {
                        // console.log(value);
                        return `$(value.username), age: ${value.age}`;
                    }}
                </Consumer>
            </h4>
        </div>
    );
};
