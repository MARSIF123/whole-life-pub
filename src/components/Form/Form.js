"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import Image from "next/image";

function Form() {
  const [email, setEmail] = useState("");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    window.alert("You are sucessfully subscribed. Happy Reading :)");
    setEmail("");
  };
  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
      <Image
        className={styles.img}
        width="20"
        height="20"
        src="https://www.artofmanliness.com/wp-content/themes/aom/assets/img/document.svg"
        alt="document"
      ></Image>
      <h2 className={styles.heading}>NEVER MISS AN UPDATE.</h2>
      <label htmlFor="email" className={styles.label}>
        Subscribe to the WLP newslatter
      </label>
      <input
        required
        id="email"
        className={styles.input}
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <button className={styles.submitBtn} type="submit">
        Subscribe
      </button>
    </form>
  );
}

export default Form;
