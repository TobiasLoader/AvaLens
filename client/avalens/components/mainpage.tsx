import React, { useState } from 'react';
import styles from "../app/page.module.css";
import LeftImagesPane from '../components/LeftImagesPane';
import RightImagesPane from '../components/RightImagesPane';
import GlobeComponent from '../components/Globe';
import CameraCard from '../components/CameraCard';
import { useAccount } from 'wagmi';

export const MainPage = ({ isClient, viewCamera, setViewCamera, imageSrc, page }) => {

  const [borrowed, setBorrowed] = useState(false);
  const { address, isConnected } = useAccount();

  return (
    <div className={styles.pageMain}>
      {page === "camera" && isClient ? (
        <>
          <GlobeComponent viewCamera={viewCamera} setViewCamera={setViewCamera} />
          {viewCamera ? (<CameraCard key={borrowed ? 'borrowed' : 'not-borrowed'} borrowed={borrowed} setBorrowed={setBorrowed} cameraId={"0x01"} stakeAmount={20} setViewCamera={setViewCamera}/>) : null}
        </>
      ) : page === "images" ? (
        <div className={styles.imagesPaneWindow}>
          <LeftImagesPane key={borrowed ? 'borrowed' : 'not-borrowed'} imageSrc={imageSrc} borrowed={borrowed} />
          <RightImagesPane />
        </div>
      ) : page === "user" ? (
        <p className={styles.centerPage}>User page coming soon</p>
      ) : null}
    </div>
  );
};

export default MainPage;