import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';
import { ImgVoteEntry } from './ImgVoteEntry';
import { EndVotingSC } from './EndVotingSC';

export const RightImagesPane = ({ }) => {
  const items = [1,2,3,4,5,6,7,8,9,10];
  
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
            console.log('End Voting Now');
            
            {/* const { successfulEndVoting } = EndVotingSC(); */}
            {/* 
            if (successfulEndVoting==undefined) console.log('not successful');
            else  console.log(successfulEndVoting); */}
          }}
        >
        End Voting Now
      </Button>
    </div>
    </div>
  );
};

export default RightImagesPane;