import React from "react";
import styles from "./CustomStructuredText.module.css";
import Heading from "../Heading/Heading";
import Link from "next/link";
import {
  StructuredText,
  Image,
  VideoPlayer,
  renderNodeRule,
} from "react-datocms";
import {
  isHeading,
  isBlockquote,
  isList,
  isLink,
  isParagraph,
} from "datocms-structured-text-utils";
import { render as toPlainText } from "datocms-structured-text-to-plain-text";

function CustomeStructuredText({ content }) {
  return (
    <StructuredText
      data={content}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case "ImageRecord":
            return <Image data={record.image.responsiveImage} />;
          case "VideoRecord": {
            console.log(record.video);
            return (
              <VideoPlayer
                autoPlay={false}
                controls
                style={{ width: `${500}px` }}
                loop={false}
                data={record.video.video}
              />
            );
          }
          default:
            return null;
        }
      }}
      customNodeRules={[
        renderNodeRule(isHeading, ({ node, children, key }) => {
          const HeadingTag = `h${node.level}`;
          const anchor = toPlainText(node)
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

          return (
            <Heading HeadingTag={HeadingTag} key={key}>
              {children} <a id={anchor} />
              <a href={`#${anchor}`} />
            </Heading>
          );
        }),
        renderNodeRule(
          isParagraph,
          ({ adapter: { renderNode }, children, key }) => {
            return renderNode(
              "p",
              {
                key,
                className: styles.paragraph,
              },
              children
            );
          }
        ),
        renderNodeRule(isLink, ({ node, children, key }) => {
          return (
            <Link
              href={node.url}
              key={key}
              style={{ color: "#87240f", textDecoration: "underline" }}
            >
              {children}
            </Link>
          );
        }),
        renderNodeRule(isBlockquote, ({ children, key }) => {
          const text = children[0].props.children[0].props.children;
          return (
            <div key={key} className={styles.quote} style={{ display: "flex" }}>
              <span>{text}</span>
            </div>
          );
        }),

        renderNodeRule(isList, ({ node, children, key }) => {
          if (node.style === "numbered") {
            return (
              <ol key={key} className={styles.list}>
                {children}
              </ol>
            );
          }
          return (
            <ul key={key} className={styles.list}>
              {children}
            </ul>
          );
        }),
      ]}
    />
  );
}

export default CustomeStructuredText;
