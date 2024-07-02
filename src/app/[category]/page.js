import React from "react";
import styles from "./categoryPage.module.css";
import { performRequest } from "@/lib/datocms";
import { gql } from "graphql-request";
import PostSummaryCard from "@/components/PostSummaryCard/PostSummaryCard";
import Heading from "@/components/Heading/Heading";
import PageHeading from "@/components/PageHeading/PageHeading";
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
  console.log(params.category);
  /*Getting perent category id */
  const res = await performRequest({
    query: gql`
      query MyQuery($slug: String) {
        parentCategory(filter: { slug: { eq: $slug } }) {
          id
          name
        }
      }
    `,
    variables: { slug: params.category },
  });
  const id = res?.data?.parentCategory?.id;
  console.log(res?.data?.parentCategory);
  // GETTING ALL CATEGORIES ID THAT EXISTS IN GIVEN PAERNT CATEGORY
  const res1 = await performRequest({
    query: gql`
      query MyQuery($id: ItemId) {
        allCategories(filter: { parentCategory: { eq: $id } }) {
          id
          name
        }
      }
    `,
    variables: { id },
  });

  const allCategoriesIds = res1?.data?.allCategories.map((c) => c.id);
  console.log(res1?.data?.allCategories);
  console.log(allCategoriesIds);
  //FINALLY GETTING ALL POSTS THAT ARE IN ALLCATEGOGIRESIDS
  const res3 = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { id: allCategoriesIds },
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
