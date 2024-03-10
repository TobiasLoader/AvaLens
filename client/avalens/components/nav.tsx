import * as React from 'react';
import styles from "../app/page.module.css";
import { ConnectWalletButton } from './connectwalletbtn/connectwalletbtn';
import { PageButton } from './pagebutton';

export const Navigation = ({ page, setPage }) => {
  return (
    <div className={styles.navigation}>
      <img src={"https://raw.githubusercontent.com/TobiasLoader/AvaLens/main/assets/avalens.png"} alt="AvaLens Logo" className={styles.avalensLogo} />
      <div className={styles.pageRow}>
        <PageButton pageName="camera" className="cameraPage" currentPage={page} onClick={() => setPage("camera")} />
        <PageButton pageName="images" className="imagesPage" currentPage={page} onClick={() => setPage("images")} />
        <PageButton pageName="user" className="userPage" currentPage={page} onClick={() => setPage("user")} />
      </div>
      <ConnectWalletButton className="connectWallet" />
    </div>
  );
}

export default Navigation;