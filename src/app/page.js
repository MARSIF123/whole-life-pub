import PostSummaryCard from "@/components/PostSummaryCard/PostSummaryCard";
import styles from "./page.module.css";
import { performRequest } from "@/lib/datocms";
const PAGE_CONTENT_QUERY = `
query MyQuery {
  allArticles {
    coverImage {
      url
    }
    id
    slug
    title
  }
}`;

export default async function Home() {
  const { data } = await performRequest({ query: PAGE_CONTENT_QUERY });
  const allArticles = data.allArticles;

  console.log({ allArticles })
  return (
    <main className={styles.main}>
      {allArticles.map(article => (
        <PostSummaryCard key={article.id} slug={article.slug} title={article.title} coverImage={article.coverImage} />
      ))}

    </main>
  );
}
