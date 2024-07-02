import React from "react";
import styles from "./pageHeading.module.css";

function PageHeading({ children }) {
  return (
    <h2 className={styles.heading}>
      {children}
      <span>
        <i>/</i>
        <i>/</i>
        <i>/</i>
      </span>
    </h2>
  );
}

export default PageHeading;
