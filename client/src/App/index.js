import React, { Component, useState, useEffect } from "react";

import logo from "../assets/logo.png";
import flower from "../assets/flower.gif";
import "./index.scss";

//socket.io
import io from "socket.io-client"

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const HOST = window.location.hostname;
const PORT = 9000;

const App = () => {

    let [plantData, setPlantData] = useState([]);
    let [lastData, setLastData] = useState({});

    const callAPI = () => {
        //fetch(`http://${HOST}:${PORT}/plantData`)
        fetch(`http://${HOST}:${PORT}/realtime`)
            .then(res => res.json())
            .then(json => {
                this.setState({ plantData: json })
            })
            .catch(err => err);
    }

    useEffect(() => {
        //call API data
        //callAPI();

        //socket.io
        const socket = io(`http://${HOST}:${PORT}/`);
        socket.connect();

        //TODO: obtener datos desde el servidos para actualizar el gráfico
        socket.on("realtimeData", data => {
          console.log("data receive");
          console.log(plantData);
          if (plantData.length > 9) plantData.shift();
          plantData = [...plantData, data]
          setLastData(data);
          setPlantData(plantData);
        });
        
      }, []);

    
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
                <p> Date: { lastData.date } </p>
                <p> Temp: { lastData.temp } </p>
                <p> H: { lastData.h } </p>
                <p> pH: { lastData.ph } </p>
                <div className="life-lapse-content">
                    <img src={flower} className="image-lapse" alt="Time lapse" />
                    <ResponsiveContainer className="chart" width="100%" height={400}>
                        <LineChart width={900} height={300} data={plantData}>
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

export default App;
