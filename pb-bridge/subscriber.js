const mqtt = require('mqtt');

const { Client } = require('pg');

//const MQTT_SERVER = 'localhost';
const MQTT_SERVER = 'test.mosquitto.org';
const MQTT_PORT = '1883';

const db = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'plant_buddy',
  user: 'postgres',
  password: 'timescale',
})


const client  = mqtt.connect(`mqtt://${MQTT_SERVER}`, { port: MQTT_PORT })

client.on('connect', function () {
  console.log('connected');
  client.subscribe(`/pb/#`, function (err) {
    console.log('subscribed')
  });
})

client.on("error", function (error) {
  console.log(error)
})



db.connect().then(async () => {

  client.on('message', async function (topic, message) {

    const topicArray = topic.split('/');
    if (topicArray.length < 4 || topicArray[1] !== 'pb') {
      return;
    }
    const token = topicArray[2];
    const label = topicArray[3];

    console.log('message Received', message.toString());

    const messageArray = message.toString().split(',');
    const time = messageArray[0]*1000;
    const device_id = messageArray[1];
    const value = messageArray[2];
  
    // add data to Database
    const text = `INSERT INTO data_sensors(
      time,
      device_id,
      label,
      value) 
      VALUES($1, $2, $3, $4) RETURNING *`;
  
    // /pb/token_01/humidity {"ts":1686843131983,"id":"684cad2a-ae8d-469a-b0bf-7d51643e91ff","v":"16.96341567791345"}
    
    const values = [new Date(+time), device_id, label, value];
    
    const res = await db.query(text, values);
    console.log(res.rows[0]);
  
  })
}).catch((error) => {
  console.log(error);
});