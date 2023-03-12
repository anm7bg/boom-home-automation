import styles from "./LoginPage.module.scss";
import { Container, Paper } from "@mui/material";

export default function LoginPage({  }) {

    return(
        <div className={styles.wrapper}>
            <Container>
                <Paper elevation={3} >
                    <form action="#">
                        <input type="text" />
                        <input type="password" />
                        <input type="submit" />
                    </form>
                </Paper>
            </Container>
        </div>
    );
} 