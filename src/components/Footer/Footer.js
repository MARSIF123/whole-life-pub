import React from "react";
import styles from "./footer.module.css";
import Seperator from "../Seperator/Seperator";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.footer}>
      <Seperator />
      <div className={styles.content}>
        <strong className={styles.title}>WHOLE LIFE PUB</strong>
        <p>Copyright &copy; 2024 All rights reserved</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link className={styles.link} href={"/contact"}>
              CONTACT
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href={"/legal"}>
              LEGAL
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href={"/about"}>
              ABOUT
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.link} href={"./all-topis"}>
              ALL TOPICS
            </Link>
          </li>
        </ul>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          lobortis malesuada feugiat. Nulla mi magna, volutpat viverra luctus a,
          porttitor at velit. Suspendisse quis sem quis sem dictum facilisis.
          Maecenas orci nibh.
        </p>
      </div>
    </div>
  );
}

export default Footer;
