import styles from "../app/page.module.css";
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

export default function SocketClient({ serverUrl, clientId }) {
  const [socket, setSocket] = useState(null);
  const [socketLoaded, setSocketLoaded] = useState(false);

  useEffect(() => {
    // Initialize Socket.IO client
    const newSocket = io(serverUrl, {
      reconnectionAttempts: 3,
      reconnectionDelay: 1000,
    });

    newSocket.on('connect', () => {
      console.log(`Socket connected with ID: ${newSocket.id} to server at ${serverUrl}`);
      setSocket(newSocket);
      setSocketLoaded(true);

      // Emit client initialization event
      newSocket.emit("client_init", clientId);
      console.log(`Client initialization emitted for clientId: ${clientId}`);

      // Borrow a camera; replace '00000001' with the actual camera ID if necessary
      newSocket.emit("borrow_camera", clientId, "00000001");
      console.log(`Borrow camera request emitted for cameraId: 00000001 by clientId: ${clientId}`);
    });

    newSocket.on("pi-capture", (data) => {
      console.log("Data received from pi-capture event:", data);
    });

    newSocket.on("borrow_response", (response) => {
      if (response.success) {
        console.log("Camera borrowed successfully:", response.message);
      } else {
        console.error("Failed to borrow camera:", response.message);
      }
    });
    

    newSocket.on('connect_error', (error) => {
      console.error(`Connection error: ${error.message}`);
    });

    newSocket.on('disconnect', (reason) => {
      console.log(`Socket disconnected due to: ${reason}`);
      setSocketLoaded(false);
    });

    // Cleanup function to run when component unmounts
    return () => {
      console.log('Disconnecting socket as component will unmount');
      newSocket.disconnect();
    };
  }, [serverUrl, clientId]); // Re-run the effect if serverUrl or clientId changes

  return (
    <div className={styles.socketConnect}>
      <p>{socketLoaded ? "Socket Connected" : "Connecting..."}</p>
    </div>
  );
}
