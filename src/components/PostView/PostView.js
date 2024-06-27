import React from "react";
import styles from "./postView.module.css";

import Title from "../Title/Title";
import { StructuredText, Image, VideoPlayer } from "react-datocms";
import Link from "next/link";

function PostView({ article }) {
  console.log(article);
  const { tags } = article;
  return (
    <div>
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
      <Title>{article.title}</Title>
      <StructuredText
        data={article.content}
        renderBlock={({ record }) => {
          switch (record.__typename) {
            case "ImageRecord":
              return <Image data={record.image.responsiveImage} />;
            case "VideoRecord": {
              console.log(record.video);
              return (
                <VideoPlayer
                  autoPlay={false} // Adjust based on your requirements
                  controls
                  style={{ width: `${500}px` }} // Adjust width as per your requirement
                  loop={false} // Adjust based on your requirements
                  data={record.video.video}
                />
              );
            }
            default:
              return null;
          }
        }}
      />
    </div>
  );
}

export default PostView;
