import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj = { id: nanoid(), name, age };
        this.props.jiaYiRen(personObj);
    };

    render() {
        return (
            <div>
                <h2>
                    This is Person Component. The sum of the above component is{" "}
                    {this.props.he}
                </h2>
                <input
                    ref={(c) => {
                        this.nameNode = c;
                    }}
                    type="text"
                    placeholder="Name"
                />{" "}
                <input
                    ref={(c) => {
                        this.ageNode = c;
                    }}
                    type="text"
                    placeholder="Age"
                />{" "}
                &nbsp;
                <button onClick={this.addPerson}>Add</button>
                <ul>
                    {this.props.yiduiren.map((p) => {
                        return (
                            <li key={p.id}>
                                {p.name}---{p.age}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return { yiduiren: state.rens, he: state.he };
    },
    { jiaYiRen: createAddPersonAction }
)(Person);
