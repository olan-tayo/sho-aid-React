import React, { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";

const Home = () => {
  const dropdownData = ["Option 1", "Option 2", "Option 3"];
  const [selectedData, setSelectedData] = useState("");
  const handleSelect = (option: string) => {
    setSelectedData(option);
  };

  return (
    <div className="m-4">
      <Dropdown
        title={selectedData}
        data={dropdownData}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default Home;
