import React, { Component } from "react";

import logo from "../assets/logo.png";
import flower from "../assets/flower.gif";
import "./index.scss";

//socket.io
import io from "socket.io-client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const HOST = window.location.hostname;
const PORT = 9000;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { plantData: null };
    }

    callAPI() {
        //fetch(`http://${HOST}:${PORT}/plantData`)
        fetch(`http://${HOST}:${PORT}/realtime`)
            .then(res => res.json())
            .then(json => {
                this.setState({ plantData: json })
            })
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    

    render() {
        return (
            <div className="App">
                
                <header className="App-header">
                    <div className="logo">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="title">
                        <h1 className="App-title">Plant Buddy</h1>
                    </div>
                </header>

                <div className="life-lapse-box">
                    <div className="life-lapse-header">
                        <h1>Life Lapse</h1>
                    </div>
                    <div className="life-lapse-content">
                        <img src={flower} className="image-lapse" alt="Time lapse" />
                        <ResponsiveContainer className="chart" width="100%" height={400}>
                            <LineChart width={900} height={300} data={this.state.plantData}>
                                <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="date" />
                                <YAxis />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="life-lapse-controls"></div>
                </div>

            </div>

        );
    }
}

export default App;
