import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';

export const ImgVoteEntry = ({ index, item }) => {
  return (
    <div className={styles.voteEntry}>
      <img src={item.src} alt={item.alt} className={styles.voteEntryImage} />
      <div className={styles.voteEntryMetadataContainer}>
        <p>{item.id}</p>
        <Button
          className={styles.voteImgBtn}
          onClick={() => console.log('vote:'+item.id)}
        >
        Vote
        </Button>
      </div>
    </div>
 );
};

export default ImgVoteEntry;