import { Button, InputAdornment, TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';
import styles from "./Login.module.scss";

export default function Login({ }) {
    return(
        <form className={styles["login-form"]} action="#">
            <TextField
                id="email"
                label="email"
                type="text"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
            <TextField
                id="pass"
                label="pass"
                type="password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
            <Button variant="contained">LOGIN</Button>
        </form>
    );
}