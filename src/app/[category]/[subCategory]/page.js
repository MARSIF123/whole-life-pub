import React from "react";
import styles from "./subCategory.module.css";
import PageHeading from "@/components/PageHeading/PageHeading";
import PostSummaryCard from "@/components/PostSummaryCard/PostSummaryCard";
import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";

export const revalidate = 0;
const PAGE_CONTENT_QUERY = gql`
  query MyQuery($id: [ItemId]) {
    allArticles(filter: { categories: { anyIn: $id } }) {
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

async function page({ params }) {
  console.log(params.subCategory);
  /*Getting category id */
  const res = await performRequest({
    query: gql`
      query MyQuery($slug: String) {
        category(filter: { slug: { eq: $slug } }) {
          id
          name
        }
      }
    `,
    variables: { slug: params.subCategory },
  });
  const id = res?.data?.category?.id;
  console.log(res?.data?.category);

  //FINALLY GETTING ALL POSTS THAT ARE IN ID
  const res3 = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { id: [id] },
  });
  const data = res3?.data;
  console.log(data);
  if (!data || !data.allArticles || data.allArticles?.length < 1) {
    return <div>{`No ARTICLE IS FOUND YET :(`}</div>;
  }

  return (
    <>
      <PageHeading>Featured</PageHeading>
      <div className={styles.postGrid}>
        {data?.allArticles.map((article) => (
          <PostSummaryCard key={article.id} data={article} />
        ))}
      </div>
    </>
  );
}

export default page;
