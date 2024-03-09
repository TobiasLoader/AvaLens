const express = require("express");
const app = express();
app.use(express.json());
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const multer  = require("multer");
const upload = multer({ dest: 'uploads/' });
require("dotenv").config();

const client = process.env.CLIENT || "http://localhost:3000";
const port = process.env.PORT || 3001;

const io = new Server(server, {
  cors: {
    origin:client
  }
});

// template for below two data structures
var camera_to_client = {
  "camera_id":false
};
const socket_map = {
  "client_id":{
    "borrowing":"camera_id",
    "socket":"socket_id between client and nodejs server"
  }
}

app.post("/init-camera", (req, res) => {
  // use req to get camera id
  console.log(req);
  const camera_id = req.body.public_key;
  if (!(camera_id in camera_to_client)){
    camera_to_client[camera_id] = false;
  } else {
    console.log("Camera already exists");
  }
})

app.post("/reset-camera", (req, res) => {
  // use req to get camera id
  if (camera_id in camera_to_client){
    const client_id = camera_to_client[camera_id];
    if (client_id && client_id in socket_map){
      socket_map[client_id]["borrowing"] = false;
    }
    camera_to_client[camera_id] = false;
    
  } else {
    console.log("Camera doesn't exists");
  }
});

app.post("/pi/upload", upload.single("image"), (req, res) => {
  // use req to get camera id
  
  console.log('File:', req.file);
  console.log('Metadata:', req.body); // Access metadata
  
  const camera_id = req.body.public_key;
  const img_data = req.file;

  if (camera_id in camera_to_client){
    const client_id = camera_to_client[camera_id];
    if (client_id && client_id in socket_map){
      const socket = socket_map[client_id]["socket"];
      socket.emit("pi-capture", img_data);
    } else {
      console.log("Client with ID given by `camera_to_client` doesn't exist");
    }
  } else {
    console.log("Camera with that ID doens't exist");
  }
})

io.sockets.on("connection", function (socket) {
  console.log("socket initiated",socket.id);
  
  // init photographer to node server sockets
  socket.on("client_init", function (id){
    if (!(id in socket_map)){
      socket_map[id] = {};
      socket_map[id]["borrowing"] = false;
      socket_map[id]["socket"] = socket;
    } else {
      console.log("Socket already exists with client ",id);
    }
    console.log(socket_map)
  });
  
  // create association between photographer and camera
  socket.on("borrow_camera", function (client_id,camera_id){
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
  socket.on("return_camera", function (client_id,camera_id){
    if (camera_to_client[camera_id] == client_id
      && socket_map[client_id]["borrowing"] == camera_id
    ){
      socket_map[client_id]["borrowing"] = false;
      camera_to_client[camera_id] = false;
    } else {
      console.log("Either camera or client doesn't exist with ID given.");
    }
  });
  
  socket.on("disconnect", function (){
    console.log("disconnect")
    socket.disconnect(0);
  })
});


server.listen(port, () => {
  console.log("Listening to port", port);
});