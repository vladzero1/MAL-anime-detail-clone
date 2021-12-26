import React from "react";
import styles from "./index.module.css";
type TextWrapperProps = React.HTMLAttributes<HTMLDivElement>;

export const TextWrapper: React.FC<TextWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.unremovedSpaceBox} ${className}`} {...props}>
      {children}
    </div>
  );
};
