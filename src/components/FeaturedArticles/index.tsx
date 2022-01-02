import React from "react";
import { FeaturedArticle } from "../../types";
import { ContentHeader } from "../ContentHeader";
import { TextWrapper } from "../TextWrapper";
import styles from "./index.module.css";

export interface FeaturedArticlesProps {
  articles: FeaturedArticle[];
}

const FeaturedArticles: React.FC<FeaturedArticlesProps> = ({ articles }) => {
  return (
    <>
      <ContentHeader
        text={"Recent Featured Articles"}
        buttonText="More Featured Articles"
      ></ContentHeader>
      <div>
        {articles.map(
          ({ image, summary, title, postedBy, tags, totalViews }, index) => {
            return (
              <div className={styles.articleContainer} key={index}>
                <a href={title.link}>
                  <img
                    src={image}
                    className={styles.articleImage}
                    alt="article"
                  />
                </a>
                <div className={styles.articleDetail}>
                  <a href={title.link}>{title.description}</a>
                  <span>{summary}</span>
                  <div style={{ display: "flex" }}>
                    <TextWrapper className={styles.detailBox}>
                      <span>by </span>
                      <a href={postedBy.link}>{postedBy.username}</a>
                    </TextWrapper>
                    <TextWrapper
                      className={styles.detailBox}
                      style={{
                        borderRight:
                          tags.length > 0 ? "1px solid #888888" : "0px",
                      }}
                    >
                      <span>{totalViews} views</span>
                    </TextWrapper>
                    {tags.length > 0 ? (
                      <div className={styles.tagsContainer}>
                        {tags.map(({ name, link }, index) => {
                          return (
                            <a
                              key={`${name}${index}`}
                              className={styles.tag}
                              href={link}
                            >
                              {name}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
export default FeaturedArticles;
