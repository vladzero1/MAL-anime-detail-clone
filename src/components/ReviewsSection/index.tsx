import React from "react";
import { monthNumtoString } from "../../helper/dateHelper";
import { Review } from "../../types";
import { ContentHeader } from "../ContentHeader";
import { TextWrapper } from "../TextWrapper";
import styles from "./index.module.css";
interface ReviewsSectionProps {
  reviews: Review[];
  totalEpisode: number;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  totalEpisode,
}) => {
  return (
    <>
      <ContentHeader text={"Reviews"} buttonText={"More Reviews"} />
      {reviews.map(
        (
          {
            image,
            description,
            date,
            episodesSeen,
            overallRating,
            username,
            profileLink,
            helpfulCount,
          },
          index
        ) => {
          return (
            <div className={styles.reviewContainer} key={`${username}${index}`}>
              <div className={styles.reviewDetailContainer}>
                <div className={styles.leftReviewDetail}>
                  <img src={`${image}`} alt="profile"></img>
                  <div className={styles.profileDataContainer}>
                    <TextWrapper>
                      <span>{username} (</span>
                      <a href={`${profileLink}/reviews`} className="a">
                        All reviews
                      </a>
                      <span>)</span>
                    </TextWrapper>
                    <div>
                      {helpfulCount} {helpfulCount > 1 ? "people" : "person"}{" "}
                      found this review helpful
                    </div>
                  </div>
                </div>
                <div className={styles.rightReviewDetail}>
                  <span>
                    {monthNumtoString(date.getMonth())} {date.getDate()},{" "}
                    {date.getFullYear()}
                  </span>
                  <span>
                    {episodesSeen} of {totalEpisode} Episodes Seen
                  </span>
                  <span>Overall Rating: {overallRating}</span>
                </div>
              </div>
              <div className={styles.reviewDescriptionContainer}>
                {description}
              </div>
              <div className={styles.buttonsContainer}>
                <button>permalink</button> | <button>report</button>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};
