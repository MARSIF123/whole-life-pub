import React from "react";
import { performRequest } from "@/lib/datocms";
import PostView from "@/components/PostView/PostView";
import { gql } from "graphql-request";
const PAGE_CONTENT_QUERY = gql`
  query MyQuery($slug: String) {
    article(filter: { slug: { eq: $slug } }) {
      author {
        name
      }
      categories {
        name
        slug
      }
      coverImage {
        responsiveImage {
          alt
          base64
          bgColor
          title
        }
      }
      publishedDate
      slug
      title
      id
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

  if (!data || !data.article) {
    return <div>{`Article not found :(`}</div>;
  }

  return <PostView article={data.article} />;
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
