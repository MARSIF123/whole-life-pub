import React from "react";
import styles from "./relatedPosts.module.css";
import Heading from "../Heading/Heading";
import { Image } from "react-datocms/image";
import Link from "next/link";

function RelatedPosts({ data }) {
  return (
    <div>
      <Heading HeadingTag={"h4"}>Related Blog Posts</Heading>
      <div className={styles.gridContainer}>
        {data?.map((post) => {
          const { categories } = post;
          const subCategorySlug = categories[0]?.slug;
          const categorySlug = categories[0]?.parentCategory?.slug;
          return (
            <Link
              key={post.id}
              className={styles.gridItem}
              href={`/${categorySlug}/${subCategorySlug}/${post.slug}`}
            >
              <div className={styles.imageWrapper}>
                <Image
                  data={post.coverImage.responsiveImage}
                  className={styles.image}
                  alt={post.title}
                />
              </div>
              <div className={styles.title}>{post.title}</div>
            </Link>
          );
        })}
      </div>{" "}
    </div>
  );
}

export default RelatedPosts;
