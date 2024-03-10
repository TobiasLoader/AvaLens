import React from 'react';
import styles from "../app/page.module.css";
import { Button } from './button';

export const ImgVoteEntry = ({ index, item }) => {
  return (
    <div className={styles.voteEntry}>
      <img src={`/display/${index+4}.jpeg`} alt={item.alt} className={styles.voteEntryImage} />
      <div className={styles.voteEntryMetadataContainer}>
        <p>{`ID: ${10+index}`}</p>
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