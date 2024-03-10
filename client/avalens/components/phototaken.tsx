import React from 'react';

export const PhotoTaken = ({ imageSrc, setImageSrc }) => {
  return (
    <>
      {imageSrc && <img src={imageSrc} className={styles.imgCapture} alt="Captured" />}
    </>
  );
};

export default PhotoTaken;