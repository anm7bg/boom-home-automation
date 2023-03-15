import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@mui/material";
import styles from "./Header.module.scss";

export default function Header ({ left, right }) {
  return (
    <Paper className={styles["header-wrapper"]}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </Paper>
  );
};

Header.propTypes = {
  left: PropTypes.node.isRequired,
  right: PropTypes.node.isRequired,
};