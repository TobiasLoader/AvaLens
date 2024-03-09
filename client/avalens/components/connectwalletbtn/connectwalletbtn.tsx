import { Button } from '../button';

import { useAccount } from 'wagmi';
import { SettingsMenu } from './settingsmenu';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export const ConnectWalletButton = ({ className }) => {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();

  if (isConnected && address) {
    return <SettingsMenu />;
  }

  return (
    <Button
      className={className}
      onClick={() => open()}
    >
      Connect Wallet
    </Button>
  );
};