import React from "react";
import { performRequest } from "@/lib/datocms";
import PostView from "@/components/PostView/PostView";
import RelatedPosts from "@/components/RelatedPosts/RelatedPosts";
import { gql } from "graphql-request";

export const revalidate = 0;
const PAGE_CONTENT_QUERY = gql`
  query MyQuery($slug: String) {
    article(filter: { slug: { eq: $slug } }) {
      author {
        name
      }
      tags {
        ... on CategoryRecord {
          slug
          parentCategory {
            slug
          }
        }
        ... on ParentCategoryRecord {
          slug
        }
      }

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
      publishedDate
      slug
      title
      id
      relatedPosts {
        id
        title
        slug
        categories {
          slug
          parentCategory {
            slug
          }
        }
        coverImage {
          responsiveImage {
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
      }
      content {
        value
        blocks {
          __typename
          ... on ImageRecord {
            id
            image {
              responsiveImage {
                src
                sizes
                base64
                title
                width
                alt
                height
              }
            }
          }
          __typename
          ... on VideoRecord {
            id
            id
            video {
              video {
                muxPlaybackId
                title
                width
                height
                blurUpThumb
              }
            }
          }
        }
      }
    }
  }
`;

const MATADATA_CONTENT_QUERY = `query MyQuery($slug :String) {
  article(filter: {slug: {eq: $slug}}) {
    title
  }
}`;

export default async function page({ params }) {
  const { data } = await performRequest({
    query: PAGE_CONTENT_QUERY,
    variables: { slug: params.postSlug },
  });
  const { relatedPosts } = data?.article;

  if (!data || !data.article) {
    return <div>{`Article not found :(`}</div>;
  }

  return (
    <>
      <PostView article={data.article} />
      <RelatedPosts data={relatedPosts} />
    </>
  );
}

export async function generateMetadata({ params }, parent) {
  const { data } = await performRequest({
    query: MATADATA_CONTENT_QUERY,
    variables: { slug: params.postSlug },
  });

  return {
    title: data?.article?.title || "Article not found",
  };
}
