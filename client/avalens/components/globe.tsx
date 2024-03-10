import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import styles from "../app/page.module.css";

export const  GlobeComponent = ({viewCamera,setViewCamera}) => {
  const globeEl = useRef();

  var pointsData = [];
  for (var i=0; i<15; i+=1){
    pointsData.push({ lat: 45+Math.random()*10, lng: Math.random()*10, size: 0.05, color: 'white' });
  }

  useEffect(() => {
    // Initialize the globe
    const globe = Globe()(globeEl.current)
      .globeImageUrl('/earth-night.jpg') // Example texture
      .pointsData(pointsData) // Example data
      .pointAltitude('size')
      .pointColor('color')
      .height(800);
      
    return () => {
      {/* globe.dispose(); */}
    };
  }, []);

  return <div className={styles.globeWrapper} ref={globeEl} style={{ width: '100%', height: '800px' }} onClick={()=>setViewCamera(!viewCamera)}/>;
};

export default GlobeComponent;
