const express = require("express");
const app = express();
app.use(express.json());
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
require("dotenv").config();

const client = process.env.CLIENT || "http://localhost:3000";
const port = process.env.PORT || 3001;

const io = new Server(server, {
  cors: {
    origin: client
  }
});

var camera_to_client = {};
const socket_map = {};

app.post("/init-camera", (req, res) => {
  console.log("in init-camera");
  const camera_id = req.body.public_key; 
  if (!(camera_id in camera_to_client)){
    camera_to_client[camera_id] = null; // Use null to indicate no client is associated yet
    res.json({ success: true, message: "Camera initialized" });
    console.log("Camera initialized with id: ", camera_id);
  } else {
    console.log("Camera already exists with id: ", camera_id);
    res.json({ success: false, message: "Camera already exists" });
  }
});

app.post("/reset-camera", (req, res) => {
  const camera_id = req.body.public_key; // Extract camera_id from request body
  if (camera_id in camera_to_client){
    const client_id = camera_to_client[camera_id];
    if (client_id && client_id in socket_map){
      socket_map[client_id]["borrowing"] = null;
    }
    camera_to_client[camera_id] = null;
    res.json({ success: true, message: "Camera reset successfully" });
    console.log("Camera reset successfully for id: ", camera_id);
  } else {
    console.log("Camera doesn't exist with id: ", camera_id);
    res.json({ success: false, message: "Camera doesn't exist" });
  }
});

app.post("/pi/upload", upload.single("image"), (req, res) => {
  console.log("in pi/upload");
  const camera_id = req.body.public_key;
  console.log("Upload request from camera_id: ", camera_id);

  if (camera_id in camera_to_client) {
    const client_id = camera_to_client[camera_id];
    console.log("client_id, camera_id, socket_map: " + client_id, camera_id, socket_map)
    if (client_id && client_id in socket_map) {
      const socket = socket_map[client_id]["socket"];
      console.log("emitting pi-capture with following: " + { img_data: req.file })
      socket.emit("pi-capture", { img_data: req.file }); // Assuming 'req.file' is the correct way to access the uploaded file
      res.json({ success: true, message: "Image uploaded and sent to client" });
    } else {
      console.log("No client associated with camera_id: ", camera_id);
      res.json({ success: false, message: "No client associated with this camera" });
    }
  } else {
    console.log("Camera not initialized: ", camera_id);
    res.json({ success: false, message: "Camera not initialized" });
  }
});


io.sockets.on("connection", (socket) => {
  console.log("Socket connected: ", socket.id);

  socket.on("client_init", (id) => {
    if (id in socket_map) {
      console.log("Client reconnected with id: ", id);
      socket_map[id]["socket"] = socket; // Update the socket for the reconnected client
    } else {
      socket_map[id] = { borrowing: null, socket: socket };
      console.log("Client initialized with id: ", id);
    }
  });

  socket.on("borrow_camera", (client_id, camera_id) => {
    if (camera_id in camera_to_client && camera_to_client[camera_id] === null) {
      if (client_id in socket_map) {
        socket_map[client_id]["borrowing"] = camera_id;
        camera_to_client[camera_id] = client_id;
        console.log(`Camera ${camera_id} borrowed by client ${client_id}`);
      } else {
        console.log(`Client ${client_id} does not exist.`);
      }
    } else {
      console.log(`Camera ${camera_id} is not available for borrowing.`);
    }
  });

  socket.on("return_camera", (client_id, camera_id) => {
    if (camera_to_client[camera_id] === client_id && socket_map[client_id]["borrowing"] === camera_id) {
      socket_map[client_id]["borrowing"] = null;
      camera_to_client[camera_id] = null;
      console.log(`Camera ${camera_id} returned by client ${client_id}`);
    } else {
      console.log("Camera return failed for client_id: ", client_id, " and camera_id: ", camera_id);
    }
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected: ", socket.id);
    socket.disconnect(true);
  });
});

server.listen(port, () => {
  console.log("Listening on port ", port);
});
