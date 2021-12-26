import React from "react";
import { dropdownList, optionsList } from "../../constant";
import { DropdownButton } from "../DropdownButton";
import "./index.css";
interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="menu-container">
      <div className="dropdown-menu-container">
        {dropdownList.map(({ text, dropdownContent, variant }) => {
          return (
            <DropdownButton
              key={text}
              text={text}
              dropdownContent={dropdownContent}
              variant={variant}
            />
          );
        })}
      </div>
      <div className="input-menu">
        <select className="search-filter">
          {optionsList.map((value) => {
            return (
              <option value={value} key={value}>
                {value}
              </option>
            );
          })}
        </select>
        <input
          className="search-box"
          type="search"
          placeholder="Search Anime, Manga, and more..."
        />
        <button className="confirm-search-button">
          <img
            alt="Search Button"
            aria-hidden="true"
            aria-label="Search Button"
            style={{ width: "12px", height: "13px", display: "none" }}
          />
        </button>
      </div>
    </div>
  );
};
