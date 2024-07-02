import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ArrowDown from "../Icons/ArrowDown";
import ShuffleIcon from "../Icons/ShuffleIcon";

function Navbar() {
  return (
    <ul className={styles.nav}>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/style"}>
          GET STYLE
          <ArrowDown />
        </Link>
        <ul className={`${styles.nav} ${styles.innerNav}`}>
          <li>
            <Link className={styles.innerlink} href={"/style/clothing"}>
              CLOTHING
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/style/accessories"}>
              ACCESSORIES
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/style/facial-hair"}>
              FACIAL HAIRr
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/style/ties"}>
              TIES
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/health-fitness"}>
          GET STRONG
          <ArrowDown />
        </Link>
        <ul className={`${styles.nav} ${styles.innerNav}`}>
          <li>
            <Link className={styles.innerlink} href={"/health-fitness/fitness"}>
              Fitness
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/health-fitness/health"}>
              Health
            </Link>
          </li>
          <li>
            <Link
              className={styles.innerlink}
              href={"/health-fitness/program-review"}
            >
              Program Review
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/people"}>
          GET SOCIAL
          <ArrowDown />
        </Link>
        <ul className={`${styles.nav} ${styles.innerNav}`}>
          <li>
            <Link className={styles.innerlink} href={"/people/family"}>
              FAMILY
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/people/fatherhood"}>
              FATHERHOOD
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/people/relationships"}>
              RELATIONSHIPS
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/people/social-skills"}>
              SOCIAL SKILLS
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/skills"}>
          GET SKILLED
          <ArrowDown />
        </Link>
        <ul className={`${styles.nav} ${styles.innerNav}`}>
          <li>
            <Link className={styles.innerlink} href={"/skills/how-to"}>
              HOW TO
            </Link>
          </li>
          <li>
            <Link className={styles.innerlink} href={"/skills/manly-know-how"}>
              MANLY KNOW-HOW
            </Link>
          </li>
          <li>
            <Link
              className={styles.innerlink}
              href={"/skills/outdoor-survival"}
            >
              OUTDOOR/SURVIVAL
            </Link>
          </li>
        </ul>
      </li>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/podcost"}>
          PODCOST
        </Link>
      </li>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/collections/books"}>
          BOOKS
        </Link>
      </li>
      <li className={styles.navLi}>
        <Link className={styles.link} href={"/random"}>
          RANDOM
          <ShuffleIcon />
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
