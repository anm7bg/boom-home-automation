import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Card from '../card/Card';
import styles from './Cameras.module.scss';

export default function Cameras ({ cameras, hasButton }) {
  const [selectedCamera, setSelectedCamera] = useState(null);

   cameras = [
    {
      videoUrl: "https://example.com/camera1.mp4"
    },
    {
      videoUrl: "https://example.com/camera2.mp4"
    },
    {
      videoUrl: "https://example.com/camera3.mp4"
    },
    {
      videoUrl: "https://example.com/camera4.mp4"
    },
    {
      videoUrl: "https://example.com/camera5.mp4"
    },
    {
      videoUrl: "https://example.com/camera6.mp4"
    },
    {
      videoUrl: "https://example.com/camera6.mp4"
    }
  ];

  const handleCameraClick = (camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className={styles.cameras}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {selectedCamera && (
            <video src={selectedCamera.videoUrl} autoPlay controls />
          )}
        </Grid>
        {hasButton && (
          <Grid item xs={12} md={4}>
            <Card iconUrl='images/plus.svg' outlined />
          </Grid>
        )}
        <Grid item xs={6}>
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
                autoPlay={index === 0}
                controls={index === 0}
                paused={index !== 0}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};