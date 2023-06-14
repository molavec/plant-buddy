const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost', { port: 1883 })

client.on('connect', function () {
  console.log('connected');
  client.subscribe('/topic/token_01/temperature', function (err) {
    console.log('subscribed')
  });

  client.subscribe('/topic/token_01/humidity', function (err) {
    console.log('subscribed')
  });
})

client.on("error", function (error) {
  console.log(error)
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString())
})