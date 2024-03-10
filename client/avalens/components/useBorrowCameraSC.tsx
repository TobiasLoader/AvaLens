import { useMemo } from 'react';
import { useAccount, useContractWrite } from 'wagmi';
import { usePrepareContractWrite, useWaitForTransaction } from '@wagmi/core';
import Big from 'big.js';
import { isNil } from 'lodash-es';
import { DISPATCH_CHAIN } from '@/constants/chains';
{/* import { useWaitForTransactionReceiptAsync } from './use-wait-for-transaction-receipt-async'; */}

export const useBorrowCameraSC = ({
    cameraId,
    stakeAmount,
  }) => {
    
  const { isConnected } = useAccount();
  const chain = DISPATCH_CHAIN;

  const { config, isLoading } = usePrepareContractWrite({
    address: chain.contracts.merit.address,
    abi: chain.contracts.merit.abi,
    functionName: 'borrowCamera',
    chainId: Number(chain?.chainId),
  });


  if (!isLoading) {
    const { data, write } = useContractWrite(config);
    
    const { isLoading, isSuccess } = useWaitForTransaction({
      confirmations: 1,
      hash: data?.hash,
      onSuccess() {
        console.log("transaction success");
      }
    });
    
    write([cameraId, Big(stakeAmount).toString()]);
  }
  
  return {
    isSuccess,
  };
};
