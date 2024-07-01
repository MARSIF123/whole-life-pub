import React from "react";
import styles from "./postSlug.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";

function layout({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.postContainer}>{children}</div>
      <Sidebar />
    </section>
  );
}

export default layout;
