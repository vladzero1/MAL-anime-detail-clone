import React, { useState } from "react";
import { relatedAnime } from "../../constant";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";

interface RelatedAnimeProps {}

export const RelatedAnime: React.FC<RelatedAnimeProps> = () => {
  const [relatedAnimeData] = useState(relatedAnime);
  return (
    <>
      <ContentHeader text={"Related Anime"} buttonText={"Edit"}></ContentHeader>
      <div
        className={styles.relatedAnimeContainer}
        style={{ paddingTop: "5px" }}
      >
        {relatedAnimeData.map(({ contentName, link, text }) => (
          <div className={styles.relatedAnimeList} key={contentName}>
            <span>{contentName}:</span>
            <a href={link} className={`${styles.a} a`}>
              {text}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
