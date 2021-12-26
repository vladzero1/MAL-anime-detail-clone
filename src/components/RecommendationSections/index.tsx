import React, { useState } from "react";
import { Recommendation } from "../../types";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";

const translateStyle = (page: number) => {
  const styles: string = `translate(${-600 * page}px, ${0}px)`;
  return styles;
};

interface RecommendationsSectionsProps {
  recommendationList: Recommendation[];
}

const RecommendationsSections: React.FC<RecommendationsSectionsProps> = ({
  recommendationList,
}) => {
  const [page, setPage] = useState(0);
  const maxPage = Math.ceil(recommendationList.length / 7);
  return (
    <>
      <ContentHeader
        text={"Recommendations"}
        buttonText="More recommendations"
      />
      <div className={styles.contentContainer}>
        <div className={styles.sliderContainer}>
          <div
            className={`${styles.sliderLeftButtonContainer} ${styles.sliderButtonContainer}`}
          >
            <img
              alt="left"
              className={`${styles.sliderLeftButton} ${styles.sliderButton}`}
              onClick={() => {
                if (page > 0) setPage(page - 1);
              }}
            />
          </div>
          <div
            className={`${styles.sliderRightButtonContainer} ${styles.sliderButtonContainer}`}
          >
            <img
              alt="right"
              className={`${styles.sliderRightButton} ${styles.sliderButton}`}
              onClick={() => {
                if (page < maxPage - 1) setPage(page + 1);
              }}
            />
          </div>
          {recommendationList.map(({ animeId, users, title, image }) => {
            return (
              <div
                className={`${styles.recommendation}`}
                key={animeId}
                style={{
                  backgroundImage: image,
                  transform: translateStyle(page),
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <span>{users} users</span>
                </div>

                <span>{title}</span>
              </div>
            );
          })}
        </div>

        <button className={styles.viewAllBtn}>
          <span>View All</span>
        </button>
      </div>
    </>
  );
};

export default RecommendationsSections;
