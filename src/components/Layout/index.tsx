import React from "react";
import { Footer } from "../Footer";
import { LayoutHeader } from "../LayoutHeader";
import "./index.css";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-container">
      <LayoutHeader />
      {children}
      <Footer />
    </div>
  );
};
