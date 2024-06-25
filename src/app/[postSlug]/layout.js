import React from "react";
import styles from "./postSlug.module.css";

function layout({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.postContainer}>{children}</div>
      <div className={styles.sidebar}>{/* <Sidebar/> */}</div>
    </section>
  );
}

export default layout;
