import { DISPATCH_CHAIN } from '@/constants/chains';
import Big from 'big.js';
import { isNil } from 'lodash-es';
import { useMemo } from 'react';
import { useWriteContract, useAccount } from 'wagmi';
import { useWaitForTransactionReceiptAsync } from './use-wait-for-transaction-receipt-async';

export const BorrowCameraSC = ({
    cameraId,
    stakeAmount,
  }: {
    cameraId: string;
    stakeAmount: uint256;
  ) => {
    
  const chain = DISPATCH_CHAIN;

  // on Dispatch chain
  const { writeContractAsync } = useWriteContract();
  
  return {
    successfulBorrow: async () => {
      try {
        if (!chain) {
          throw new Error('Missing source subnet.');
        }
        if (!cameraId) {
          throw new Error('Missing address to approve.');
        }
        if (!stakeAmount) {
          throw new Error('Missing address to approve.');
        }
  
        const hash = await writeContractAsync({
          address: chain.contracts.merit.address,
          functionName: 'borrowCamera',
          abi: chain.contracts.merit.abi,
          args: [cameraId, stakeAmount],
          chainId: Number(chain?.chainId),
        });
        
        console.info('Approve pending.', hash);
        await waitForTransactionReceipt({ hash });
        console.info('Approve successful.', hash);
        return hash;
      } catch (e: any) {
        console.warn(e?.message ?? e);
  
        return undefined;
      }
    },
  };
};