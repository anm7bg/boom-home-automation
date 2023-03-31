import React from 'react';
import { Card as MuiCard, CardContent } from '@mui/material';
import styles from './Card.module.scss';

export default function Card ({ iconUrl, outlined = false, onClick }) {

  return (
    <MuiCard
      className={`${styles.card} ${outlined ? styles.outlined : ''}`}
      onClick={onClick}
    >
      <CardContent>
        {iconUrl && <img src={iconUrl} alt="card icon" />}
      </CardContent>
    </MuiCard>
  );
};