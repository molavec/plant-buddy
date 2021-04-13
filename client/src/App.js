import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//TODO: ver como obtener un host permanente el LAN
const HOST = "localhost";
//const HOST = "192.168.1.104";
const PORT = 9000;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch(`http://${HOST}:${PORT}/testAPI`)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
