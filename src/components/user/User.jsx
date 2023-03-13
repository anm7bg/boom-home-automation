import { Avatar, Container, Grid, Typography } from "@mui/material";
import styles from "./User.module.scss";

export default function User({ avatar = "/images/avatar.png", name="Ivan Petrov", size = "90px" }) {

    return(
        <div className={styles["user-container"]}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Avatar alt="avatar" src={avatar} sx={{width: size, height: size}} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}