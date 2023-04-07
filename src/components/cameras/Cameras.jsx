import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Card from '../card/Card';
import styles from './Cameras.module.scss';

export default function Cameras ({ cameras, hasButton = true }) {
  const [selectedCamera, setSelectedCamera] = useState(null);

   cameras = [
    {
      videoUrl: "videos/1.mp4"
    },
    {
      videoUrl: "videos/2.mp4"
    },
    {
      videoUrl: "videos/3.mp4"
    },
    {
      videoUrl: "videos/4.mp4"
    },
    {
      videoUrl: "videos/5.mp4"
    },
    {
      videoUrl: "videos/6.mp4"
    },
    {
      videoUrl: "videos/7.mp4"
    }
  ];

  if (!selectedCamera && cameras.length > 0) {
    setSelectedCamera(cameras[0]);
  }

  const handleCameraClick = (camera) => {
    setSelectedCamera(camera);
  };
   
  return (
    <div className={styles.cameras}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          {selectedCamera && (
            <video 
            className={styles.video} 
            src={selectedCamera.videoUrl} 
            autoPlay
            controls />
          )}
        </Grid>
        <Grid item xs={12} md={4} >
          <div className={styles['cameras-container']}>
            {cameras.map((camera, index) => (
              <video
                key={index}
                src={camera.videoUrl}
                muted
                onClick={() => handleCameraClick(camera)}
                className={`
                  ${styles['camera-video']}
                  ${selectedCamera && selectedCamera.videoUrl === camera.videoUrl ? styles['camera-video--selected'] : ''}
                `}
                paused
              />
            ))}
            <div className={styles.add}>
              {hasButton && (
              <Card  iconUrl='images/plus.svg' outlined />
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};