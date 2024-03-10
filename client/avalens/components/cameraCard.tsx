import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';
import { useContract, useSigner, useProvider } from 'wagmi';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { DISPATCH_CHAIN } from '@/constants/chains';

import { useAccount } from 'wagmi';
export const CameraCard = ({ setViewCamera, borrowed, setBorrowed, stakeAmount, cameraId }) => {
  const { isConnected, address } = useAccount();
  
  const { data: signer } = useSigner();
  const provider = useProvider();
  
  const chain = DISPATCH_CHAIN;
  
  const contract = useContract({
    addressOrName: chain.contracts.merit.address,
    contractInterface: chain.contracts.merit.abi,
    signerOrProvider: signer || provider,
  });
  
  const contractWithSigner = contract.connect(signer);
  
  const borrowCamera = async () => {
    if (!signer) {
      alert('Please connect your wallet');
      return;
    }
  
    const destinationAddress = 'DESTINATION_ADDRESS_HERE'; // Set the destination address
    try {
      const tx = await contractWithSigner.borrowCamera(cameraId, Big(stakeAmount).toString());
      await tx.wait();
      console.log('Tx sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message. See console for more details.');
    }
  };
  
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
              borrowCamera();
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