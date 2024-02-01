import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";
import { Data } from "../../types/Dropdown/Dropdown";

const DropDownPage = () => {
  const dropdownData = [
    {
      key: 1,
      value: "Option 1",
    },
    {
      key: 2,
      value: "Option 2",
    },
    {
      key: 3,
      value: "Option 3",
    },
    {
      key: 4,
      value: "Option 4",
    },
  ];
  const [selectedData, setSelectedData] = useState("");
  const handleSelect = (option: Data) => {
    setSelectedData(option?.value);
  };
  return (
    <>
      <Dropdown
        title={selectedData}
        data={dropdownData}
        onSelect={handleSelect}
      />
      <p>{selectedData}</p>
    </>
  );
};

export default DropDownPage;
