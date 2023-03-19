import { Avatar, Container, Grid, Typography } from "@mui/material";
import styles from "./User.module.scss";

export default function User({ 
    avatar = "/images/avatar.png", 
    name="Ivan Petrov", 
    size = "90px", 
    headingSize, 
    hasWelcome = false
}) {

    let display = hasWelcome ? {display: "block"} : {display: "none"};

    return(
        <div className={styles["user-container"]}>
            <Container className={styles["user-wrapper"]}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Avatar alt="avatar" src={avatar} sx={{width: size, height: size}} />
                    </Grid>
                    <Grid item xs={8}>
                        <p style={display} className={styles.welcome}>Welcome back,</p>
                        <Typography component={headingSize}>{name}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}