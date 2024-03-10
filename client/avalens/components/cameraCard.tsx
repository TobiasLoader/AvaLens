import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';
{/* import { useBorrowCameraSC } from './useBorrowCameraSC'; */}

import { useAccount } from 'wagmi';
export const CameraCard = ({ setViewCamera, borrowed, setBorrowed, stakeAmount, cameraId }) => {
  const { isConnected, address } = useAccount();
  
  {/* const { isSuccess } = useBorrowCameraSC({ cameraId, stakeAmount }); */}

  {/* const handleBorrow = async () => {
    try {
      const txHash = await isSuccess();
      alert(`Transaction successful: ${txHash}`);
    } catch (error) {
      console.error('Error borrowing camera:', error);
      alert(`Error: ${error.message}`);
    }
  }; */}
  
  
  if (isConnected && address) {
    return (
      <div className={styles.cameraCard}>
        <img src={"/avalens.png"} alt="Camera icon" className={styles.cameraIcon} />
        <div className={styles.cameraCardData}>
          <p>ID: #{cameraId}</p>  
          <p>Borrow: {stakeAmount} MERIT</p>  
        </div>
        <div className={styles.cameraCardBtnRow}>
          <Button
            className={styles.borrowBtn}
            onClick={() => {
              // if (viewCamera)
              setBorrowed(true);
              {/* setBorrowedCameraId(cameraId); */}
              // else if (!viewCamera)
              setViewCamera(currentViewCamera => !currentViewCamera);
              
              {/* const { successfulBorrow } = BorrowCameraSC({
                cameraId: cameraId,
                stakeAmount: borrowCost,
              });
              
              if (successfulBorrow==undefined) console.log('not successful');
              else  console.log(successfulBorrow); */}
              
              {/* handleBorrow(); */}
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
  } else {
    return (null);
  }
};

export default CameraCard;