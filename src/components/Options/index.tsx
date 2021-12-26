import React from "react";

interface OptionsProps {
  value: string;
  props?: React.OptionHTMLAttributes<HTMLOptionElement>;
}

export const Options: React.FC<OptionsProps> = ({props, value}) => {
  return <option {...props} value={value}>{value}</option>;
};
