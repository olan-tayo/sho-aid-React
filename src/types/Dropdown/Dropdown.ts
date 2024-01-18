import { CSSProperties } from "react";

export type DropdownType = {
  title: string;
  data: string[];
  onSelect: (option: string) => void;
  selectStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  iconStyle?: CSSProperties;
};
