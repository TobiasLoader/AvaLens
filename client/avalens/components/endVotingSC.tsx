import { C_CHAIN } from '@/constants/chains';
import Big from 'big.js';
import { isNil } from 'lodash-es';
import { useMemo } from 'react';
import { useWriteContract, useAccount } from 'wagmi';
import { useWaitForTransactionReceiptAsync } from './use-wait-for-transaction-receipt-async';

export const EndVotingSC = () => {
    
  const chain = C_CHAIN;

  // on Dispatch chain
  const { writeContractAsync } = useWriteContract();
  
  return {
    successfulEndVoting: async () => {
      try {
        if (!chain) {
          throw new Error('Missing source subnet.');
        }
        
        const hash = await writeContractAsync({
          address: chain.contracts.voting.address,
          functionName: 'endVoting',
          abi: chain.contracts.voting.abi,
          args: [],
          chainId: Number(chain?.chainId),
        });
        
        console.info('Approve pending.', hash);
        await waitForTransactionReceipt({ hash });
        console.info('Approve successful.', hash);
        return hash;
        return undefined;
      } catch (e: any) {
        console.warn(e?.message ?? e);
  
        return undefined;
      }
    },
  };
};