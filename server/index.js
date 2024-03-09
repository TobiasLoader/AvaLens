const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
require('dotenv').config();

const client = process.env.CLIENT || "http://localhost:3000";
const port = process.env.PORT || 3001;

const io = new Server(server, {
  cors: {
    origin:client
  }
});

app.post('/api/upload', upload.single('image'), (req, res) => {
  console.log(req);
  console.log(req.file);
  res.send('Image uploaded successfully!');
});

var camera_to_client = {
  "camera_id":false
};
const socket_map = {
  "client_id":{
    "borrowing":"camera_id",
    "socket":"socket_id between client and nodejs server"
  }
}

app.get('/init-camera', (req, res) => {
  // use req to get camera id
  const camera_id = 0;
  if (!(camera_id in camera_to_client)){
    camera_to_client[camera_id] = false;
  } else {
    console.log("Camera already exists");
  }
})

app.get('/pi/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  // use req to get camera id
  const camera_id = 0;
  const img_data = [];

  if (camera_id in camera_to_client){
    const client_id = camera_to_client[camera_id];
    if (!client_id && client_id in socket_map){
      const socket = socket_map[client_id]["socket"];
      socket.emit('pi-capture', img_data);
    } else {
      console.log("Client with ID given by `camera_to_client` doesn't exist");
    }
  } else {
    console.log("Camera with that ID doens't exist");
  }
})

io.sockets.on('connection', function (socket) {
  console.log('socket initiated',socket.id);
  
  // init photographer to node server sockets
  socket.on('client_init', function (id){
    if (!(id in socket_map)){
      socket_map[id] = {};
      socket_map[id]["borrowing"] = false;
      socket_map[id]["socket"] = socket;
    } else {
      console.log("Socket already exists with client ",id);
    }
  });
  
  // create association between photographer and camera
  socket.on('borrow_camera', function (client_id,camera_id){
    if (camera_id in camera_to_client
      && !camera_to_client[camera_id]
      && client_id in socket_map
    ){
      socket_map[client_id]["borrowing"] = camera_id;
      camera_to_client[camera_id] = client_id;
    } else {
      console.log("Either camera or client doesn't exist with ID given.");
    }
  });
  
  // break association between photographer and camera
  socket.on('return_camera', function (client_id,camera_id){
    if (camera_to_client[camera_id] == client_id
      && socket_map[client_id]["borrowing"] == camera_id
    ){
      socket_map[client_id]["borrowing"] = false;
      camera_to_client[camera_id] = false;
    } else {
      console.log("Either camera or client doesn't exist with ID given.");
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