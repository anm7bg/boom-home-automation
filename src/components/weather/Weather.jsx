import { Grid, Typography } from "@mui/material";
import styles from "./Weather.module.scss";

export default function Weather({ degrees=20, type="cloudy"}) {

    return(
        <div className={styles["weather-wrapper"]}>
            <Typography component="h3">Weather</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={`/images/${type}.svg`} alt="weather" />
                </Grid>
                <Grid item xs={6}>
                    <Typography>{`${degrees}°`}</Typography>
                </Grid>
            </Grid>
        </div>
    );
}