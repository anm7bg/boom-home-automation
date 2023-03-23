import React, { useState } from 'react';
import { Line, XAxis, YAxis, LineChart} from 'recharts';
import { CircularProgress, Button } from '@mui/material';
import styles from "./Thermostat.module.scss";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';

export default function Thermostat ({ data }) {
    data = [
        { temperature: 25, hour: 12 },
        { temperature: 13, hour: 13 },
        { temperature: 14, hour: 14 },
        { temperature: 15, hour: 15 },
        { temperature: 15, hour: 16 },
        { temperature: 10, hour: 17 },
    ];

    const SemiCircularProgress = () => {
        return (
            <div style={{ position: 'relative' }}>
                <CircularProgress size={320} thickness={2.3} variant="determinate" value={50} style={{ color: 'rgba(0, 0, 0, 0.30', transform: 'rotate(180deg)'}} />
                <div className={styles["temperature"]}>{progress}°</div>
                <CircularProgress size={320} thickness={2.3} variant="determinate" value={progress} style={{ color: 'white', transform: 'rotate(180deg)', position: 'absolute', left: 0, top: 0,zIndex: '1' }} />
            </div>
        )
    }

    const [progress, setProgress] = useState(25);

    const handleIncrement = () => {
        setProgress(prev => Math.min(prev + 1, 50));
    };

    const handleDecrement = () => {
        setProgress(prev => Math.max(prev - 1, 15));
    };

    return (
        <div className={styles["container"]}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant='text' style={{ margin: '-105px -120px 0 0'}} onClick={handleDecrement}>
                <RemoveCircleOutlinedIcon className={styles["buttons"]} />
                </Button>
                <SemiCircularProgress progress={progress}/>
                <Button variant='text' style={{ margin: '-105px 0 0 -120px'}} onClick={handleIncrement}>
                <AddCircleOutlinedIcon className={styles["buttons"]} />
                </Button>
            </div>
            <div  className={styles["graph-container"]}>
                <div style={{ margin: "1rem 3rem" }}>TEMPERATURE GRAPH</div>
                <LineChart width={520} height={150} data={data}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    );
};