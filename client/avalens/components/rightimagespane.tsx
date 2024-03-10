import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';
import { ImgVoteEntry } from './ImgVoteEntry';

export const RightImagesPane = ({ }) => {
  const sample = {
    "id":"0x01",
    "src":"/avalens.png",
    "alt":"avalens logo"
  };
  const items = [sample,sample,sample,sample,sample,sample];
  
  return (
    <div className={`${styles.rightImagesPane} ${styles.mainRegion}`}>
      <div className={styles.voteEntryContainer}>
        {items.map((item, index) => (
          <ImgVoteEntry key={index} index={index} item={item}/>
        ))}
      </div>
      <div className={styles.bottomRightPane}>
        <Button
          className={styles.endVoteBtn}
          onClick={() => {
            console.log('End Voting Now')
          }}
        >
        End Voting Now
      </Button>
    </div>
    </div>
  );
};

export default RightImagesPane;