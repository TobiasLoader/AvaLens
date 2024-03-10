'use client'

import React, { useEffect, useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import SocketClient from '../components/SocketClient';
import LeftImagesPane from '../components/LeftImagesPane';
import RightImagesPane from '../components/RightImagesPane';
import { Navigation } from '../components/Nav';
import { Web3Provider } from '../providers/web3provider';
import GlobeComponent from '../components/Globe';
import CameraCard from '../components/CameraCard';

export default function Home() {
  const remoteUrl = "https://avalens.onrender.com";
  const localUrl = "http://localhost:3001";
  // https://avalens.onrender.com/pi/upload
  const serverUrl = remoteUrl;
  
  const [isClient, setIsClient] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [page, setPage] = useState("camera");
  const [borrowed, setBorrowed] = useState(false);
  const [viewCamera, setViewCamera] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);
  
  return (
    <main className={styles.main}>
      {isClient ? (
        <Web3Provider>
          <Navigation page={page} setPage={setPage} />
          <div className={styles.pageMain}>
            {page === "camera" ? (
              <>
                <GlobeComponent viewCamera={viewCamera} setViewCamera={setViewCamera} />
                {viewCamera ? (<CameraCard borrowed={borrowed} setBorrowed={setBorrowed} cameraAddr={"0x01"} clientAddr={"0x01"} borrowCost={20} />) : null}
              </>
            ) : page === "images" ? (
              <div className={styles.imagesPaneWindow}>
                <LeftImagesPane imageSrc={imageSrc} borrowed={borrowed} />
                <RightImagesPane />
              </div>
            ) : page === "user" ? (
              <p className={styles.centerPage}>User page coming soon</p>
            ) : null}
          </div>
          <SocketClient serverUrl={serverUrl} clientId={"0x00"} setImageSrc={setImageSrc} />
        </Web3Provider>
      ) : (
        <></>
      )}
    </main>
  );
}