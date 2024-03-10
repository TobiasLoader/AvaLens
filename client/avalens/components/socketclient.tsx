import styles from "../app/page.module.css";
import React, { useState, useEffect } from 'react';

export default function SocketClient({ serverUrl, clientId, setImageSrc }) {
  const [socket, setSocket] = useState(null);
  const [socketLoaded, setSocketLoaded] = useState(false);

  useEffect(() => {
    const loadSocketIO = async () => {
      const { default: io } = await import('socket.io-client');
      const newSocket = io(serverUrl);

      newSocket.on('connect', () => {
        console.log('Socket connected:', newSocket.id);
        setSocket(newSocket);
        setSocketLoaded(true);
        newSocket.emit("client_init", clientId);
        newSocket.emit("borrow_camera", clientId, "00000001");
        // newSocket.emit("return_camera", clientId, camera_id);
      });

      newSocket.on("pi-capture", (data) => {
        console.log('pi-capture');
        console.log(data);
        if (data.filename) {
          const imageUrl = `${serverUrl}/uploads/${data.filename}`;
          setImageSrc(imageUrl);
          console.log('received from pi',imageUrl);
        }
      });

      // Clean up on component unmount
      return () => newSocket.disconnect();
    };

    loadSocketIO();
  }, [serverUrl, clientId]);
  
  return (
    socketLoaded ? (
      <div className={`${styles.socketConnect} ${styles.connected}`}>
        <p>Socket Connected!</p>
      </div>
    ) : (
      <div className={`${styles.socketConnect} ${styles.connecting}`}>
        <p>Connecting...</p>      
      </div>
    )
  );
};
