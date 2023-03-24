import React from 'react';
import { Grid } from '@mui/material';
import Card from '../card/Card';
import styles from './Scenes.module.scss';

export default function Scenes ({ cards = [], selected }) {
    cards = [
        { iconUrl: 'images/morning.svg', selected: false },
        { iconUrl: 'images/alarm-clock.svg', selected: false },
        { iconUrl: 'images/shower.svg', selected: false },
        { iconUrl: 'images/tea-cup.svg', selected: false },
        { iconUrl: 'images/rock.svg', selected: false },
        { iconUrl: 'images/plus.svg', selected: false },
    ];

  return (
    <div className={styles['scenes-container']}>
      <Grid container spacing={1}>
        {cards.map((card, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              iconUrl={card.iconUrl}
              outlined={selected && selected.id === card.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};