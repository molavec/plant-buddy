#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const app = require("../app");
const debugFunction = require("debug");
const http = require("http");
const debug = debugFunction('api:server');
/**
 * Import ramdom data.
 */
const getRamdomData = require("../lib/ramdom");
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '9000');
app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app);
/**
 * socket.io
 */
const socketIO = require("socket.io");
const io = new socketIO.Server(server, {
    serveClient: true,
    cors: {
        //origin: "http://localhost:3000",
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
let interval;
io.on('connection', (socket) => {
    console.log('Front-end connected');
    //TODO: Añadir acá el código de socker.io que gestiona los emit.
    // Luego de que funcione pasarlo a una libreria independiente.
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getDataAndEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log('Front-end disconnected');
        clearInterval(interval);
    });
});
const getDataAndEmit = (socket) => {
    const response = getRamdomData();
    // Emitting a new message. Will be consumed by the client
    socket.emit('realtimeData', response);
};
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + (addr && addr.port ? addr.port : '80');
    debug('Listening on ' + bind);
}
