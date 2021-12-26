import React from "react";
import { ContentHeader, ContentHeaderProps } from "../ContentHeader";

interface WrapperProps {
  header: ContentHeaderProps;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, header }) => {
  return (
    <>
      <ContentHeader {...header}></ContentHeader>
      {children}
    </>
  );
};
