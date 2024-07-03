import React from "react";
import Link from "next/link";
import { Image } from "react-datocms/image";
import styles from "./postSummaryCard.module.css";

function PostSummaryCard({ data }) {
  const { slug, title, categories } = data;
  const subCategorySlug = categories[0]?.slug;
  const categorySlug = categories[0]?.parentCategory?.slug;
  const coverImage = data.coverImage.responsiveImage;
  return (
    <div className={styles.postCard}>
      <Link
        href={`${categorySlug}/${subCategorySlug}/${slug}`}
        className={styles.imageContainer}
      >
        <Image data={coverImage} className={styles.image} alt={"djfdh"} />
      </Link>
      <Link href={`/${slug}`} className={styles.titleContainer}>
        {title}
      </Link>
    </div>
  );
}

export default PostSummaryCard;
