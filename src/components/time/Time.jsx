import React, { useEffect, useState } from "react";
import styles from "./Time.module.scss";

export default function Time() {

    const [time, setTime] = useState("");    

    useEffect(() => {
        const interval = setInterval(() => {
            const today = new Date()
            setTime(time => today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());
            return () => clearInterval(interval);
        },1000)
    },[])

    return(
        
        <div className={styles["time-wrapper"]}>
            <p>Time</p>
            <p>{time}</p>
        </div>
    );
}