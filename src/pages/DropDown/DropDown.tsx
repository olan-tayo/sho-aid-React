import { useState } from "react";
import Dropdown from "../../components/Dropdown/Dropdown";

const DropDownPage = () => {
  const dropdownData = ["Option 1", "Option 2", "Option 3"];
  const [selectedData, setSelectedData] = useState("");
  const handleSelect = (option: string) => {
    setSelectedData(option);
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
