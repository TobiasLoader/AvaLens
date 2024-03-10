import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';
import { ImgVoteEntry } from './ImgVoteEntry';

export const RightImagesPane = ({ }) => {
  const items = ['addr1', 'addr2', 'addr3'];
  
  return (
    <div className={styles.rightImagesPane}>
      {items.map((item, index) => (
        <ImgVoteEntry />
      ))}
      <Button
        className={styles.endVoteBtn}
        onClick={() => {
          console.log('End Voting Now')
        }}
      >
      End Voting Now
      </Button>
    </div>
  );
};

export default RightImagesPane;