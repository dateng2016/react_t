import React, { Component } from "react";
import qs from "querystring";

const DetailData = [
    { id: "01", content: "hello world" },
    { id: "02", content: "hello world above" },
    { id: "03", content: "hello world below" },
];

export default class Detail extends Component {
    render() {
        // const { id, title } = this.props.match.params;

        // const { search } = this.props.location;
        // console.log(search);
        // const { id, title } = qs.parse(search.slice(1));
        // console.log(id, title);

        const { id, title } = this.props.location.state || {};

        const findResult =
            DetailData.find((detailObj) => {
                return detailObj.id === id;
            }) || {};

        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }
}
