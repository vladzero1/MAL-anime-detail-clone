import React from "react";
import { monthNumtoString, time24Hourto12Hour } from "../../helper/dateHelper";
import { ForumDiscussions } from "../../types";
import { ContentHeader } from "../ContentHeader";
import { TextWrapper } from "../TextWrapper";
import styles from "./index.module.css";
interface RecentForumProps {
  dataList: ForumDiscussions[];
}

const RecentForum: React.FC<RecentForumProps> = ({ dataList }) => {
  return (
    <>
      <ContentHeader
        text="Recent Forum Discussion"
        buttonText="More discussion"
      />
      {dataList.map(({ title, category, link, ask, repliesCount, answer }) => {
        const askDate = `${monthNumtoString(
          ask.date.getMonth()
        )} ${ask.date.getDate()}, ${ask.date.getFullYear()}`;
        const ansHour = time24Hourto12Hour(answer.date);
        const ansDate = `${monthNumtoString(
          answer.date.getMonth()
        )} ${answer.date.getDate()}, ${
          ansHour.hour
        }:${answer.date.getMinutes()} ${ansHour.AMPM}`;
        return (
          <div className={styles.forumContentContainer} key={title}>
            <div className={styles.discussionImageContainer}>
              <img
                alt="a"
                className={styles.forumImage}
              />
            </div>
            <div className={styles.forumDescriptionContainer}>
              <TextWrapper>
                {category === "Poll" ? <span>Poll: </span> : null}
                <a href={link}>{title}</a>
              </TextWrapper>
              <TextWrapper>
                <a href={ask.link}>{ask.username}</a>
                <span> - {askDate}</span>
              </TextWrapper>
            </div>
            <div className={styles.repliesCountContainer}>
              <span className={styles.repliesCountText}>
                {repliesCount} replies
              </span>
            </div>
            <div className={styles.lastReplyDetailContainer}>
              <TextWrapper style={{ justifyContent: "flex-end" }}>
                <span>by </span> <a href={answer.link}>{answer.username}</a>
                <a href={`${link}/lastReply`}>{` =>`}</a>
              </TextWrapper>
              <TextWrapper style={{ justifyContent: "flex-end" }}>
                {ansDate}
              </TextWrapper>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default RecentForum;
