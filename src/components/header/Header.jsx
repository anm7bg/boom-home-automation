import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import styles from "./Header.module.scss";

export default function Header ({ left, right }) {
  return (
    <div className={styles["header-wrapper"]}>
        <Paper className={styles["header"]}>
        <div className={styles.left}>{left}</div>
        <div className={styles.right}>{right}</div>
        </Paper>
    </div>
  );
};

Header.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};