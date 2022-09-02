/* Servidor de Express */
const express = require('express');
const app = express();
/* Servidor de socket */
const http = require('http');
const server = http.createServer(app);
/* Dependencias */
const cors = require('cors')
const config = require("./config");
const log = console.log.bind(console);
const port = config.PORT
const HOST= config.HOST
const path= require('path')

//Configuracion Socket Server
const Sockets = require("./socket/socket");
const endpoints = require("./routes/endpoint.routes");
const io = require("socket.io")(server, {
 //transports:['websocket', 'polling'],
 //transports: ['polling'],
  cors: {
    origin: "*",
  },
});

Sockets(io, app)
endpoints(io, app)
//app.use('/',express.static(path.join(__dirname, 'public')))
//app.use(express.static("public"));
//app.use(express.static(path.join(__dirname, 'public')))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));
app.get('/*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



server.listen(port, function () {
  log(`Servidor iniciando en http://${HOST}:${port}`);
});

