import { useContract, useSigner, useProvider } from 'wagmi';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { DISPATCH_CHAIN } from '@/constants/chains';

function useBorrowCameraSC(cameraId, stakeAmount) {
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

  return (<div></div>);
}

export default SendMessageButton;