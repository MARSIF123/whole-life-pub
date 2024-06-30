import React from "react";
import styles from "./title.module.css";

function Heading({ children, HeadingTag }) {
  const fontSize =
    HeadingTag === "h1"
      ? "4.8rem"
      : HeadingTag === "h2"
      ? "3.6rem"
      : HeadingTag === "h3"
      ? "3rem"
      : HeadingTag === "h4"
      ? "2.5rem"
      : "2rem";
  return (
    <HeadingTag className={styles.title} style={{ fontSize }}>
      {children}
    </HeadingTag>
  );
}

export default Heading;
