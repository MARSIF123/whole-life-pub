import PostSummaryCard from "@/components/PostSummaryCard/PostSummaryCard";
import styles from "./home.module.css";
import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";
const PAGE_CONTENT_QUERY = gql`
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
      categories {
        slug
        parentCategory {
          slug
        }
      }
    }
  }
`;

export default async function Home() {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
  const allArticles = data?.allArticles;

  if (!data || !data.allArticles) {
    return <div>{`No ARTICLE IS FOUND YET :(`}</div>;
  }
  return (
    <div className={styles.postGrid}>
      {allArticles.map((article) => (
        <PostSummaryCard key={article.id} data={article} />
      ))}
    </div>
  );
}
