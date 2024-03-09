'use client'

import React, { useEffect, useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import SocketClient from '../components/SocketClient';
import { Navigation } from '../components/Nav';
import { Web3Provider } from '../providers/web3provider';

export default function Home() {
  const remoteUrl = "https://avalens.onrender.com";
  const localUrl = "http://localhost:3001";
  // https://avalens.onrender.com/pi/upload
  const serverUrl = remoteUrl;
  
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);
  
  return (
    <main className={styles.main}>
      {isClient ? (
        <Web3Provider>
          <Navigation />
          <SocketClient serverUrl={serverUrl} clientId={"0x00"} />
        </Web3Provider>
      ) : (
        <></>
      )}
    </main>
  );
}

/* <main className={styles.main}>
  <div>
    <SocketClient serverUrl={serverUrl} clientId={"0x00"} />
  </div>
  <div className={styles.description}>
    <p>
      Get started by editing&nbsp;
      <code className={styles.code}>app/page.tsx</code>
    </p>
    <div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{" "}
        <Image
          src="/avalens.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={24}
          priority
        />
      </a>
    </div>
  </div>

  <div className={styles.center}>
    <Image
      className={styles.logo}
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </div>

  <div className={styles.grid}>
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Docs <span>-&gt;</span>
      </h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>

    <a
      href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Learn <span>-&gt;</span>
      </h2>
      <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    </a>

    <a
      href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Templates <span>-&gt;</span>
      </h2>
      <p>Explore starter templates for Next.js.</p>
    </a>

    <a
      href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>
        Deploy <span>-&gt;</span>
      </h2>
      <p>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
    </a>
  </div>
</main> */
