import React from "react";
import { Menu } from "../Menu";
import "./index.css";
interface LayoutHeaderProps {}

export const LayoutHeader: React.FC<LayoutHeaderProps> = () => {
  return (
    <>
      <div className="header-container">
        <img className="mal-icon" alt="MyAnimeList Icon"></img>
        <img className="banner-header" alt="Banner Icon"></img>
        <div className="button-container">
          <button id="hide-ads-button">Hide Ads</button>
          <button id="login-button">Login</button>
          <button id="sign-up-button">Sign Up</button>
        </div>
      </div>
      <Menu />
    </>
  );
};
