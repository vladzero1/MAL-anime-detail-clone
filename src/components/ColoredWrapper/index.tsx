import React from "react";
import styles from "./index.module.css";

export type BackgroundColor = "Gray" | "White";

type ColoredWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  bgColor: BackgroundColor;
};

export const ColoredWrapper: React.FC<ColoredWrapperProps> = ({
  children,
  bgColor,
  className,
  ...prop
}): JSX.Element => {
  const backgroundColor = bgColor === "Gray" ? "#ebebeb" : "#ffffff";
  return (
    <div
      className={`${styles.tableRow} ${className}`}
      style={{
        backgroundColor: backgroundColor,
      }}
      {...prop}
    >
      {children}
    </div>
  );
};
