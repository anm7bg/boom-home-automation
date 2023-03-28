import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Card from '../card/Card';
import styles from './Cameras.module.scss';

export default function Cameras ({ cameras, hasButton }) {
  const [selectedCamera, setSelectedCamera] = useState(null);

  const handleCameraClick = (camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className={styles.cameras}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={hasButton ? 8 : 12}>
          {selectedCamera && (
            <video src={selectedCamera.videoUrl} autoPlay controls />
          )}
        </Grid>
        {hasButton && (
          <Grid item xs={12} md={4}>
            <Card iconUrl="https://example.com/plus-icon.png" outlined />
          </Grid>
        )}
        <Grid item xs={12}>
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