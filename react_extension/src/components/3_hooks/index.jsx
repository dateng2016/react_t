import React from "react";
import ReactDOM from "react-dom";
// class Demo extends React.Component {
//     state = { count: 0 };

//     add = () => {
//         this.setState((state) => {
//             return { count: state.count + 1 };
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <h2>Current Sum: {this.state.count}</h2>
//                 <button onClick={this.add}>Click to Add 1</button>
//             </div>
//         );
//     }
// }

export default function Demo() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("Tom");

    const myRef = React.useRef();

    // React.useEffect(() => {
    //     console.log("@@@");
    // }, [count]);

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        return () => {
            console.log("UNMOUNTED");
            clearInterval(timer);
        };
    }, []);

    function add() {
        // setCount(count + 1);
        setCount((count) => {
            return count + 1;
        });
    }

    const changeName = () => {
        setName((name) => {
            return name + name;
        });
    };

    const unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    };

    const show = () => {
        alert(myRef.current.value);
    };
    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>Current Sum: {count}</h2>
            <br />
            <h2>My name is: {name}</h2>
            <button onClick={add}>Click to Add 1</button> &nbsp;
            <button onClick={show}>Click to ALERT</button>&nbsp;
            <button onClick={changeName}>Click to Change Name</button>
            <hr />
            <button onClick={unmount}>Unmount Component</button>
        </div>
    );
}
