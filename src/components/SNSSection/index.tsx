import React from "react";
import styles from "./index.module.css";
interface SNSSectionProps {}

export const SNSSection: React.FC<SNSSectionProps> = () => {
  return (
    <div className={styles.snsContainer}>
      <img alt="Facebook" aria-hidden="true" />
      <img alt="Twitter" aria-hidden="false" />
      <img alt="Reddit" aria-hidden="false" />
      <img alt="Tumblr" aria-hidden="false" />
    </div>
  );
};
