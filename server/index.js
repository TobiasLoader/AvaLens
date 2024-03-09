const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
require('dotenv').config();

const client = process.env.CLIENT || "http://localhost:3000";
const port = process.env.PORT || 3001;

const io = new Server(server, {
  cors: {
    origin:client
  }
});

const socket_map = {
  "cameras":{
    "camera_id":{
      "borrowed_by":"photographer_id",
      "socket":"socket_id between raspberry pi and nodejs server"
    }
  },
  "photographers":{
    "photographer_id":{
      "borrowing":"camera_id",
      "socket":"socket_id between client and nodejs server"
    }
  }
}

io.sockets.on('connection', function (socket) {
  console.log('socket initiated',socket.id);
  
  socket.on('camera_init', function (camera_id){
    if (!(camera_id in socket_map["cameras"])){
      socket_map["cameras"][camera_id] = socket;
    } else {
      console.log("Socket already exists with camera ",camera_id);
    }
  });
  
  socket.on('photographer_init', function (photographer_id){
    if (!(photographer_id in socket_map["photographers"])){
      socket_map["photographers"][photographer_id] = socket;
    } else {
      console.log("Socket already exists with photographer ",photographer_id);
    }
  });
  
  socket.on('disconnect', function (){
    console.log('disconnect')
    socket.disconnect(0);
  })
});


server.listen(port, () => {
  console.log("Listening to port", port);
});