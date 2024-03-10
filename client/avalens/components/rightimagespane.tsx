import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';

export const RightImagesPane = ({ }) => {
  return (
    <div className={styles.rightImagesPane}>
      {/* {
        borrowed ? (
          imageSrc ? (
            <img src={imageSrc} alt="picture captured icon" className={styles.imgCapture} />
          ) : (
            <img src={"/takepic.svg"} alt="take pic icon" className={styles.takePicIcon} />
          )
        ) : (
          <img src={"/borrowcam.svg"} alt="borrow camera icon" className={styles.borrowCameraIcon} />
        )
      } */}
    </div>
  );
};

export default RightImagesPane;