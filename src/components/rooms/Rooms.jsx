import { Grid } from "@mui/material";
import Card from "../card/Card";
import styles from "./Rooms.module.scss";

export default function Rooms({  }) {

    return(
        <div className={styles["rooms-wrapper"]}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Card />
                </Grid>
            </Grid>
        </div>
    );
}