import styles from "./LoginPage.module.scss";
import { Container, Paper } from "@mui/material";
import Login from "../../src/components/login/Login";

export default function LoginPage({  }) {

    return(
        <div className={styles.wrapper}>
            <Container>
                <Paper elevation={3} >
                    <Login />
                </Paper>
            </Container>
        </div>
    );
} 