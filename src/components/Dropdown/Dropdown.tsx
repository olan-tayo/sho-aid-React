import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { DropdownType } from "../../types/Dropdown/Dropdown";
import { useState } from "react";

const Dropdown = ({
  title,
  data,
  onSelect,
  selectStyle,
  optionStyle,
  iconStyle,
}: DropdownType) => {
  const [isToggleSelect, setIsToggleSelect] = useState(false);

  const handleSelectOption = (option: string) => {
    setIsToggleSelect(false);
    onSelect(option);
  };

  return (
    <div className="relative ">
      <div
        onClick={() => setIsToggleSelect((prev) => !prev)}
        className=" cursor-pointer w-[350px] rounded-lg h-[44px] border-[1px] bg-white flex justify-between items-center border-[#96A397] px-4 py-3"
        style={selectStyle}
      >
        <p>{title || "Select an option"}</p>
        {isToggleSelect ? (
          <ExpandLess style={iconStyle} />
        ) : (
          <ExpandMore style={iconStyle} />
        )}
      </div>

      {isToggleSelect && (
        <div
          className="p-2 rounded-lg absolute bg-white shadow w-[350px] mt-2"
          style={optionStyle}
        >
          {data?.map((item, index) => {
            return (
              <div
                className="p-2 cursor-pointer"
                key={index}
                onClick={() => handleSelectOption(item)}
              >
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
