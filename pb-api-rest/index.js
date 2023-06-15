const mqtt = require('mqtt');

const { Client } = require('pg');

const db = new Client({
  host: '127.0.0.1',
  port: 5432,
  database: 'plant_buddy',
  user: 'postgres',
  password: 'timescale',
})

const client  = mqtt.connect('mqtt://localhost', { port: 1883 })

client.on('connect', function () {
  console.log('connected');
  client.subscribe(`/pb/#`, function (err) {
    console.log('subscribed')
  });

  client.subscribe('/pb/token_01/humidity', function (err) {
    console.log('subscribed')
  });
})

client.on("error", function (error) {
  console.log(error)
})

db.connect().then(async () => {

  client.on('message', async function (topic, message) {
  
    // TODO: Check token id to permit

    // message is Buffer
    console.log(topic, message.toString())
  
    const data = JSON.parse(message.toString());
  
    if (topic == '/pb/token_01/temperature') {
      temperature = data.v;
      humidity = 0;
    } else {
      temperature = 0;
      humidity = data.v;
    }
  
    // add data to Database
    const text = `INSERT INTO data_sensors(
      time,
      device_id,
      temperature,
      humidity) 
      VALUES($1, $2, $3, $4) RETURNING *`;
  
    // /pb/token_01/humidity {"ts":1686843131983,"id":"684cad2a-ae8d-469a-b0bf-7d51643e91ff","v":"16.96341567791345"}
    
    const values = [new Date(data.ts), data.id, temperature, humidity];
    
    const res = await db.query(text, values);
    console.log(res.rows[0]);
  
  })
}).catch((error) => {
  console.log(error);
});