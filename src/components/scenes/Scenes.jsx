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
        { iconUrl: 'images/outlined-plus.svg', selected: false },
    ];

  return (
    <div className={styles['scenes-container']}>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={6} md={4} lg={3} key={index}>
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