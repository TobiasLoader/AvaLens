import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';

export const CameraCard = ({ setViewCamera, borrowed, setBorrowed, cameraAddr, borrowCost, clientAddr }) => {
  
  return (
    <div className={styles.cameraCard}>
      <img src={"/avalens.png"} alt="Camera icon" className={styles.cameraIcon} />
      <div className={styles.cameraCardData}>
        <p>Address: {cameraAddr}</p>  
        <p>Borrow: {borrowCost} MERIT</p>  
      </div>
      <div className={styles.cameraCardBtnRow}>
        <Button
          className={styles.borrowBtn}
          onClick={() => {
            console.log('borrow');
            setBorrowed(true);
            setViewCamera(currentViewCamera => !currentViewCamera);
          }}
        >
        Borrow
        </Button>
        <Button
          className={styles.returnBtn}
          onClick={() => console.log('return')}
        >
        Return
        </Button>
      </div>
    </div>
  );
};

export default CameraCard;