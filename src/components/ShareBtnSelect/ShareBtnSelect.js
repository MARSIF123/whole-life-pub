import React from "react";
import styles from "./shareBtnSelect.module.css";
import Link from "next/link";

function ShareBtnSelect() {
  return (
    <div className={styles.sidebar}>
      <div key={"getPocketLink"} className={styles.shareBtn}>
        <Link href={"/www.google.com"} className={styles.getPocketBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M24 14a9 9 0 0 1-18 0V8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6zm-9.674 3.718a.949.949 0 0 0 1.348 0l4.047-4.077a.966.966 0 0 0 0-1.36.949.949 0 0 0-1.35 0L15 15.68l-3.372-3.398a.949.949 0 0 0-1.349 0 .966.966 0 0 0 0 1.359l4.047 4.077z"
            ></path>
          </svg>
        </Link>
      </div>
      <div key={"fbLink"} className={styles.shareBtn}>
        <Link href={"/www.google.com"} className={styles.getFBBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            {" "}
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M17.315 27h-4.878V15.499H10v-3.963h2.437v-2.38C12.437 5.923 13.813 4 17.723 4h3.255v3.964h-2.034c-1.523 0-1.623.554-1.623 1.588l-.007 1.984H21l-.431 3.963h-3.255V27z"
            ></path>{" "}
          </svg>
        </Link>
      </div>
      <div key={"pinterestLink"} className={styles.shareBtn}>
        <Link href={"/www.google.com"} className={styles.getPinBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M5 11.33c0 2.568.967 4.853 3.04 5.705.34.14.644.005.742-.374.069-.262.23-.923.303-1.199.1-.374.06-.505-.214-.832-.597-.71-.98-1.628-.98-2.93 0-3.773 2.806-7.152 7.308-7.152 3.985 0 6.174 2.451 6.174 5.724 0 4.306-1.894 7.94-4.704 7.94-1.554 0-2.715-1.292-2.343-2.876.446-1.892 1.31-3.935 1.31-5.3 0-1.222-.653-2.242-2.001-2.242-1.587 0-2.863 1.652-2.863 3.865 0 1.41.474 2.363.474 2.363l-1.909 8.139c-.566 2.415-.084 5.376-.044 5.674.024.178.25.22.353.087.146-.193 2.035-2.542 2.68-4.887.18-.665 1.042-4.105 1.042-4.105.516.99 2.023 1.86 3.625 1.86 4.771 0 8.007-4.376 8.007-10.235C25 6.125 21.272 2 15.605 2 8.555 2 5 7.087 5 11.33z"
            ></path>
          </svg>
        </Link>
      </div>
      <div key={"twitterLink"} className={styles.shareBtn}>
        <Link href={"/www.google.com"} className={styles.getTwitterbtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            {" "}
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M23.526 8.846a4.51 4.51 0 0 0 1.893-2.513 8.355 8.355 0 0 1-2.736 1.102A4.194 4.194 0 0 0 19.539 6c-2.38 0-4.307 2.035-4.307 4.544 0 .356.036.703.11 1.034-3.58-.19-6.754-1.996-8.88-4.747a4.724 4.724 0 0 0-.583 2.285c0 1.576.76 2.967 1.917 3.783a4.154 4.154 0 0 1-1.953-.568v.056c0 2.202 1.484 4.04 3.458 4.455a4.01 4.01 0 0 1-1.137.16c-.277 0-.548-.027-.81-.08.548 1.804 2.139 3.12 4.025 3.155-1.476 1.219-3.333 1.944-5.351 1.944-.348 0-.691-.02-1.028-.062A11.747 11.747 0 0 0 11.604 24c7.926 0 12.257-6.924 12.257-12.929 0-.197-.002-.394-.01-.587A9.006 9.006 0 0 0 26 8.13a8.257 8.257 0 0 1-2.474.715z"
            ></path>{" "}
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ShareBtnSelect;
