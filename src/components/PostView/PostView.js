import React from "react";
import styles from "./postView.module.css";

import Heading from "../Heading/Heading";

import Link from "next/link";
import ShareBtnSelect from "../ShareBtnSelect/ShareBtnSelect";
import { formatDate } from "@/utils/helpers";
import CustomeStructuredText from "../CustomStructuredText/CustomeStructuredText";

function PostView({ article }) {
  const { tags, author, title, publishedDate, content } = article;
  return (
    <div style={{ marginBottom: "100px" }}>
      {/* TAGS */}
      <div>
        <span style={{ fontWeight: "bold" }}>in: </span>
        {tags?.map((tag, index) => {
          const href = tag.parentCategory
            ? `/${tag.parentCategory?.slug}/${tag.slug}`
            : `/${tag.slug}`;
          return (
            <>
              <Link key={index} href={href} className={styles.link}>
                {tag.slug}
                {index < tags.length - 1 && ", "}
              </Link>
            </>
          );
        })}
      </div>

      {/* AUTHOR NAME AND DATE */}
      <span className={styles.date}>
        {author?.name} • {formatDate(publishedDate)}
      </span>

      {/* TITLE */}
      <Heading HeadingTag="h1">{title}</Heading>

      {/* CONTENT */}
      <div className={styles.contentContainer}>
        {/* SHARE POST BUTTONS */}
        <ShareBtnSelect />

        {/* ACTUAL CONTENT */}
        <div className={styles.content}>
          {" "}
          <CustomeStructuredText content={content} />
        </div>
      </div>
    </div>
  );
}

export default PostView;
