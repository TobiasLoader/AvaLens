'use client'

import React, { useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';
import styles from "../app/page.module.css";

export const  GlobeComponent = ({viewCamera,setViewCamera,isConnected}) => {
  {/* const globeEl = useRef(null);
  let globe = null;
  
  var pointsData = [];
  for (var i=0; i<15; i+=1){
    pointsData.push({ lat: 45+Math.random()*10, lng: Math.random()*10, size: 0.05, color: 'white' });
  }
  
  const assignGlobe = ()=>{
    globe = Globe()(globeEl.current)
    .globeImageUrl('/earth-night.jpg') // Example texture
    .pointsData(pointsData) // Example data
    .pointAltitude('size')
    .pointColor('color')
    .height(800);
  };
  
  useEffect(() => {
    console.log(isConnected,globeEl.current)
    if (globeEl.current){
      // Initialize the globe
      assignGlobe();
    }
  }, [isConnected]);
  
  return ( 
    <div className={styles.globeWrapper} ref={globeEl} style={{ width: '100%', height: '800px' }} onClick={()=>{
      setViewCamera(currentViewCamera => !currentViewCamera);
    }}/>
    ); */}
    
    
  return (
    <div className={styles.globeWrapper}>
      <img src={"/globe-static.png"} alt={"image of globe with positions of cameras"} className={styles.globeStaticImg} onClick={()=>{
        setViewCamera(currentViewCamera => !currentViewCamera);
      }}/>
    </div>
  );
};

export default GlobeComponent;

{/* 
  const [drawGlobe, setDrawGlobe] = useState(false);
const globeEl = useRef();

var pointsData = [];
for (var i=0; i<15; i+=1){
  pointsData.push({ lat: 45+Math.random()*10, lng: Math.random()*10, size: 0.05, color: 'white' });
}

useEffect(() => {
  if (isConnected){
    // Initialize the globe
    const globe = Globe()(globeEl.current)
      .globeImageUrl('/earth-night.jpg') // Example texture
      .pointsData(pointsData) // Example data
      .pointAltitude('size')
      .pointColor('color')
      .height(800);
  }
}, [isConnected]);

return (
  drawGlobe ? <div className={styles.globeWrapper} ref={globeEl} style={{ width: '100%', height: '800px' }} onClick={()=>setViewCamera(!viewCamera)}/> : null
); */}