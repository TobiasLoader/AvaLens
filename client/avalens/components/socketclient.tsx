'use client'

import React, { useState, useEffect } from 'react';

export default function SocketClient({ serverUrl, clientId }) {
  const [socket, setSocket] = useState(null);
  const [socketLoaded, setSocketLoaded] = useState(false);

  useEffect(() => {
    const loadSocketIO = async () => {
      const { default: io } = await import('socket.io-client');
      const socket = io(serverUrl);
    
      socket.on('connect', () => {
        console.log('Socket connected:', socket.id);
        setSocket(socket);
        setSocketLoaded(true);
      });
      
      socket.emit("client_init", clientId);
      
      {/* socket.emit("borrow_camera", clientId, camera_id); */}
      {/* socket.emit("return_camera", clientId, camera_id); */}
  
      socket.on("pi-capture", (img) => {
        console.log(data);
      });
   
      // Emit an event or set up listeners here
      // Clean up on component unmount
      return () => socket.disconnect();
    };

    loadSocketIO();
  }, [serverUrl]); // Re-run the effect if serverUrl changes

  return (
    <div>
      {socketLoaded ? "Socket Connected" : "Connecting..."}
    </div>
  );
};