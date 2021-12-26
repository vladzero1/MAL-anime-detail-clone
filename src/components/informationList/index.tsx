import React from "react";
import { InformationContent } from "../../types";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";
interface InformationListProps {
  headerDescription: string;
  content: InformationContent[];
}

export const InformationList: React.FC<InformationListProps> = ({
  headerDescription,
  content,
}) => {
  return (
    <>
      <ContentHeader text={headerDescription}></ContentHeader>
      {content.map(({ contentName, description },index) => {
        return (
          <div key={`${contentName}`} className={styles.informationContainer}>
            <span className={styles.contentName}>{contentName}: </span>
            {typeof description === "string" ? (
              <span> {description}</span>
            ) : (
              <>
                {description.map(({ text, link }, index) => {
                  const body = index !== 0 ? ", ".concat(text) : text;
                  return link === null ? (
                    <span key={`${text} ${index}`}>{body}</span>
                  ) : (
                    <a href="link" className="a" key={`${text} ${index}`}>
                      {body}
                    </a>
                  );
                })}
              </>
            )}
          </div>
        );
      })}
      <div></div>
    </>
  );
};
