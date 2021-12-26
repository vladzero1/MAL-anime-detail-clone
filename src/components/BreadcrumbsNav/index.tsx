import React from "react";
import { Button } from "../Button";
import styles from "./index.module.css";

interface BreadcrumbsNavProps {
  navList: {
    text: string;
    link: string;
  }[];
}

export const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ navList }) => {
  return (
    <div className={styles.breadcrumbsNav}>
      {navList.map(({ text, link }, index) => {
        const body = (
          <span key={text}>
            <Button aria-label="Breadcrumbs Nav">{text}</Button>
            {index < navList.length - 1 ? <span>{">"}</span> : null}
          </span>
        );
        return body;
      })}
    </div>
  );
};
