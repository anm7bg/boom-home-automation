import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import styles from './Card.module.scss';

export default function Card ({ iconUrl, outlined = false, onClick, title }) {

  return (
    <MuiCard
      className={`${styles.card} ${outlined ? styles.outlined : ''}`}
      onClick={onClick}
    >
      <CardContent>
        {iconUrl && <img src={iconUrl} alt="card icon" />}
        <Typography>
          {title}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};