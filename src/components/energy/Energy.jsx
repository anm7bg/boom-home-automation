import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { ComposedChart, CartesianGrid, Area, XAxis, Line, LineChart, YAxis } from 'recharts';
import { useState } from "react";
import styles from "./Energy.module.scss"

export default function Energy({ 
    energy = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
  ] }) {

    const [period, setPeriod] = useState('');

    const handleChange = (event) => {
        setPeriod(event.target.value);
    };

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Typography>
                        Energy
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">This week</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={period}
                        label="Age"
                        onChange={handleChange}
                        >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
            </Grid>
            <div>
                <ComposedChart width={600} height={300} data={energy}>
                    <Line type="monotone" dataKey="energy" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Area type="monotone" dataKey="energy" stroke="#8884d8" fill="#8884d8" />
                </ComposedChart>
            </div>
        </div>
    );
}