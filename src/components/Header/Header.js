import React from "react";
import styles from "./header.module.css";
import image from "../../../public/Favicon.png";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import Link from "next/link";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import ShuffleIcon from "../Icons/ShuffleIcon";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.mobileNav}>
        <MobileNavbar />
      </div>
      <Link className={styles.logoImage} href={"/"}>
        <Image
          src={image}
          className={styles.img}
          alt="logo-wholelifepub"
          priority={true}
        />
      </Link>
      <div className={styles.nav}>
        <Navbar />
        <Search />
      </div>
      <div className={styles.podcast}>
        <ul className={styles.list}>
          <li className={styles.navLi}>
            <Link className={styles.link1} href={"/random"}>
              Random
            </Link>
          </li>
          <li className={styles.navLi}>
            <Link className={styles.link2} href={"/podcost"}>
              PODCOST
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
