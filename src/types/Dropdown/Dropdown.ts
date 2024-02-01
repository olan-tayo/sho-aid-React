import { CSSProperties } from "react";

export type Data = {
  value: string;
  key: number | string;
};

export type DropdownType = {
  title: string;
  data: Data[];
  onSelect: (option: Data) => void;
  selectStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  iconStyle?: CSSProperties;
};
