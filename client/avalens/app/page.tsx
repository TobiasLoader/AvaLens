'use client'

import React, { useEffect, useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import SocketClient from '../components/SocketClient';
import { Navigation } from '../components/Nav';
import { MainPage } from '../components/MainPage';
import { Web3Provider } from '../providers/web3provider';

{/* import { ConnectWalletButton } from '../components/connectwalletbtn/connectwalletbtn';
import { PageButton } from '../components/pagebutton'; */}

export default function Home() {
  const remoteUrl = "https://avalens.onrender.com";
  const localUrl = "http://localhost:3001";
  // https://avalens.onrender.com/pi/upload
  const serverUrl = remoteUrl;
  
  const [isClient, setIsClient] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [page, setPage] = useState("images");
  const [viewCamera, setViewCamera] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);
  
  return (
    <main className={styles.main}>
      {isClient ? (
        <Web3Provider>
          <Navigation page={page} setPage={setPage} />
          <MainPage isClient={isClient} viewCamera={viewCamera} setViewCamera={setViewCamera} imageSrc={imageSrc} page={page} />
          <SocketClient serverUrl={serverUrl} clientId={"0x00"} setImageSrc={setImageSrc} />
        </Web3Provider>
      ) : (
        <></>
      )}
    </main>
  );
}