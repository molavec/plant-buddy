const mqtt = require('mqtt');
const { v4: uuidv4 } = require('uuid');


const client  = mqtt.connect('mqtt://localhost', { port:1883})

const device_id = uuidv4();

client.on('connect', function () {
    setInterval(() => {
      const fakeTemperature = (Math.random()*10%20+10).toString();
      const fakeHumidity = (Math.random()*10%80+20).toString();
      console.log('fakeTemperature', `${Date.now()},${device_id},${fakeTemperature}`);
      console.log('fakeHumidity', `${Date.now()},${device_id},${fakeHumidity}`);
      client.publish('/pb/token_01/temperature', `${Date.now()},${device_id},${fakeTemperature}` );
      client.publish('/pb/token_01/humidity', `${Date.now()},${device_id},${fakeHumidity}`);
    }, 3*1000);
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})