import { Button } from '../button';
import styles from "../../app/page.module.css";

import { useAccount, useDisconnect } from 'wagmi';
import { SettingsMenu } from './settingsmenu';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export const ConnectWalletButton = ({ className }) => {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const { disconnectAsync } = useDisconnect();
  const handleDisconnectButtonClick = async () => {
    await disconnectAsync();
  };
  
  if (isConnected && address) {
    return (
      <Button
        className={styles.connectWallet}
        onClick={() => handleDisconnectButtonClick()}
      >
        Disconnect Wallet
      </Button>
    );
  } else {
    return (
      <Button
        className={styles.connectWallet}
        onClick={() => open()}
      >
        Connect Wallet
      </Button>
    );
  }

  
};