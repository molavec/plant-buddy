import React, { useState, useEffect } from 'react';

import logo from '../assets/logo.png';
import flower from '../assets/flower.gif';
import './index.scss';

//socket.io
import io from 'socket.io-client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const HOST = window.location.hostname;
const PORT = 9000;

interface plantDataFormat {
  date: string;
  temp: number;
  h: number;
  ph: number;
}

const App: React.FC = () => {
  const plantDataStateVariable = useState<plantDataFormat[]>([]);
  let plantData = plantDataStateVariable[0];
  const setPlantData = plantDataStateVariable[1];
  const [lastData, setLastData] = useState<plantDataFormat | undefined>(undefined);

  useEffect(() => {
    //socket.io
    const socket = io(`http://${HOST}:${PORT}/`);
    socket.connect();

    //TODO: obtener datos desde el servidos para actualizar el gráfico
    socket.on('realtimeData', (data: plantDataFormat) => {
      console.log('data receive');
      console.log(plantData);
      if (plantData.length > 9) plantData.shift();
      setLastData(data);
      plantData = [...plantData, data];
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
        <p> Date: {lastData ? lastData.date : '--'} </p>
        <p> Temp: {lastData ? lastData.temp : '--'} </p>
        <p> H: {lastData ? lastData.h : '--'} </p>
        <p> pH: {lastData ? lastData.ph : '--'} </p>
        <div className="life-lapse-content">
          <img src={flower} className="image-lapse" alt="Time lapse" />
          <ResponsiveContainer className="chart" width="100%" height={400}>
            <LineChart width={900} height={300} data={plantData}>
              <Line type="monotone" dataKey="temp" stroke="#FF84d8" />
              <Line type="monotone" dataKey="h" stroke="#8800CC" />
              <Line type="monotone" dataKey="ph" stroke="#88FFd8" />
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
};

export default App;
