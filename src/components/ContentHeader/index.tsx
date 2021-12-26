import React from "react";
import { Button } from "../Button";
import styles from "./index.module.css";

export interface ContentHeaderProps {
  text: string;
  buttonText?: string;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
  text,
  buttonText,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{text}</h2>
      {buttonText ? (
        <Button style={{ fontSize: "11px", fontFamily: "Verdana, Arial" }}>
          {buttonText}
        </Button>
      ) : null}
    </div>
  );
};
