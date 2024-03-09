import styles from "../app/page.module.css";
import React, { useState, useEffect } from 'react';

export default function SocketClient({ serverUrl, clientId }) {
  const [socket, setSocket] = useState(null);
  const [socketLoaded, setSocketLoaded] = useState(false);
  const [imageUrl, setImageUrl] = useState(''); // Add state to store the image URL

  useEffect(() => {
    const loadSocketIO = async () => {
      const { default: io } = await import('socket.io-client');
      const socket = io(serverUrl);
    
      socket.on('connect', () => {
        console.log('Socket connected:', socket.id);
        setSocket(socket);
        setSocketLoaded(true);
        socket.emit("client_init", clientId);
        socket.emit("borrow_camera", clientId, "00000001"); // You might need to handle the camera_id dynamically
      });

      // Handle the "pi-capture" event to update the image URL
      socket.on("pi-capture", (imgUrl) => {
        console.log("Image URL received:", imgUrl);
        setImageUrl(imgUrl); // Update the imageUrl state with the received URL
      });
   
      // Clean up on component unmount
      return () => socket.disconnect();
    };

    loadSocketIO();
  }, [serverUrl, clientId]); // Re-run the effect if serverUrl or clientId changes

  return (
    <div className={styles.socketConnect}>
      <p>{socketLoaded ? "Socket Connected" : "Connecting..."}</p>
      {/* Conditionally render the image if imageUrl is set */}
      {imageUrl && <img src={imageUrl} alt="Captured" style={{ maxWidth: '100%', maxHeight: '400px' }} />}
    </div>
  );
};
