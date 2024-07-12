import React, { Component } from "react";
import { Button, DatePicker } from "antd";
import { WechatOutlined } from "@ant-design/icons";

export default class App extends Component {
    render() {
        return (
            <div>
                App...
                <br />
                <br />
                <button>Click Me</button>
                <br />
                <br />
                <Button type="primary">Primary Button</Button>
                <DatePicker />
                <WechatOutlined />
            </div>
        );
    }
}
