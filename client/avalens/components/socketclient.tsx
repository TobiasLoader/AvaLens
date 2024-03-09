import styles from "../app/page.module.css";
import React, { useState, useEffect } from 'react';

export default function SocketClient({ serverUrl, clientId }) {
  const [socket, setSocket] = useState(null);
  const [socketLoaded, setSocketLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

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
        console.log(data);
        if (data.img_data && data.img_data.filename) {
          const imageUrl = `${serverUrl}/uploads/${data.img_data.filename}`;
          setImageSrc(imageUrl);
        }
      });

      // Clean up on component unmount
      return () => newSocket.disconnect();
    };

    loadSocketIO();
  }, [serverUrl, clientId]);

  return (
    <div className={styles.socketConnect}>
      <p>{socketLoaded ? "Socket Connected" : "Connecting..."}</p>
      {imageSrc && <img src={imageSrc} className={styles.imgCapture} alt="Captured" />}
    </div>
  );
};
