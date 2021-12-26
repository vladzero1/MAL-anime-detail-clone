import React from "react";
import { DropdownContent, DropdownWrapperVariant } from "../../types";
import "./index.css";

interface DropdownButtonProps {
  text: string;
  dropdownContent: DropdownContent[];
  variant: DropdownWrapperVariant;
}

const maxWidthVariant = (variant: DropdownWrapperVariant) => {
  switch (variant) {
    case "Extra Small":
      return 60;
    case "Small":
      return 70;
    case "Medium":
      return 80;
    case "Large":
      return 100;
  }
};

export const DropdownButton: React.FC<DropdownButtonProps> = ({
  text,
  dropdownContent,
  variant,
}) => {
  return (
    <div
      className="dropdown-container"
      style={{ maxWidth: maxWidthVariant(variant) }}
      role="link"
    >
      <button
        className="dropdown-button"
        style={{ width: maxWidthVariant(variant) }}
      >
        {text}
      </button>
      <div className="dropdown-content">
        {dropdownContent.length > 0
          ? dropdownContent.map(({ description, ...props }) => (
              <button className="content-button" {...props} key={description}>
                {description}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};
