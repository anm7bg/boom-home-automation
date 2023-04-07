import { Container, Grid, Typography } from '@mui/material';

import Navigation from "../src/components/navigation/Navigation";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Header from "../src/components/header/Header";
import Energy from "../src/components/energy/Energy";
import Thermostat from "../src/components/thermostat/Thermostat";
import Scenes from "../src/components/scenes/Scenes";
import Cameras from "../src/components/cameras/Cameras";

export default function Dashboard() {
  
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Header />
      <Weather />
      <Time />
      <User />
      <Typography variant="h4" gutterBottom>
        My Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Thermostat />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Scenes />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Cameras />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Energy />
        </Grid>
      </Grid>
    </Container>
  );
};
