import PostSummaryCard from "@/components/PostSummaryCard/PostSummaryCard";
import styles from "./home.module.css";
import { performRequest } from "@/lib/datocms";
const PAGE_CONTENT_QUERY = `
query MyQuery {
  allArticles {
    coverImage {
      responsiveImage(locale: en, sizes: "") {
        alt
        aspectRatio
        base64
        bgColor
        height
        sizes
        src
        srcSet
        title
        webpSrcSet
        width
      }
    }
    id
    slug
    title
  }
}`;

export default async function Home() {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
  const allArticles = data.allArticles;

  console.log({ allArticles });
  return (
    <div className={styles.postGrid}>
      {allArticles.map((article) => (
        <PostSummaryCard
          key={article.id}
          slug={article.slug}
          title={article.title}
          coverImage={article.coverImage.responsiveImage}
        />
      ))}
    </div>
  );
}
