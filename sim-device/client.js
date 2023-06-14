const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost', { port:1883})

client.on('connect', function () {
    setInterval(() => {
      client.publish('/topic/token_01/temperature', Math.random().toString(36));
      client.publish('/topic/token_01/humidity', Math.random().toString(36));
    }, 10000);
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})