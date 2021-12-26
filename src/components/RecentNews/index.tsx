import React from "react";
import { monthNumtoString, time24Hourto12Hour } from "../../helper/dateHelper";
import { News } from "../../types";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";
interface RecentNewsProps {
  news: News[];
}

const RecentNews: React.FC<RecentNewsProps> = ({ news }) => {
  return (
    <>
      <ContentHeader text={"Recent News"} buttonText="More news" />
      {news.map(({ image, content, date, discussion, publisher, title }) => {
        const time = time24Hourto12Hour(date);
        return (
          <div className={styles.newsContainer} key={title}>
            <img
              alt="news"
              src={image}
              style={{ height: "82px", width: "54px" }}
            />
            <div className={styles.newsDetailContainer}>
              <a href={content.link}>
                <strong>{title}</strong>
              </a>
              <p className={styles.newsDescription}>
                <span style={{ lineHeight: 1 }}>
                  {content.description.slice(0, 200)}
                  {"..."}
                  <a href={content.link}>read more</a>
                </span>
              </p>
              <span className={styles.timeText}>
                {`${monthNumtoString(
                  date.getMonth()
                )} ${date.getDay()}, ${date.getFullYear()} ${
                  time.hour
                }:${date.getMinutes()} ${time.AMPM} by `}
                <a href={publisher.link}>{publisher.username}</a> |{" "}
                <a href={discussion.link}>
                  {` Discuss (${discussion.count} comments)`}
                </a>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RecentNews;
