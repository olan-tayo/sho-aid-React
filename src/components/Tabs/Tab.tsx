import React, { useState } from "react";

type SelectedTabType = {
  key: number | null;
  value: string;
};

type TabType = {
  children: React.ReactNode[];
  onSelectedTab: (tab: SelectedTabType) => void;
  data: SelectedTabType[];
  tabContainer?: string;
  tabText?: string;
};

const Tab = ({
  children,
  onSelectedTab,
  data,
  tabContainer,
  tabText,
}: TabType) => {
  const [selectedTab, setSelectedTab] = useState<SelectedTabType>({
    key: null,
    value: "",
  });

  const handleSelectTab = (tab: SelectedTabType) => {
    setSelectedTab({ key: tab?.key, value: tab?.value });
    onSelectedTab(tab);
  };

  return (
    <div>
      <div className="flex gap-3">
        {data?.map((tab, index) => {
          return (
            <div key={index}>
              <div
                className={`${tabContainer}`}
                onClick={() => handleSelectTab(tab)}
              >
                {" "}
                <p className={`cursor-pointer ${tabText}`}>{tab?.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        {data?.map((tab, index) => {
          return (
            <>
              {tab?.value === selectedTab?.value && (
                <div key={index}>
                  <div>
                    {children[selectedTab.key ? selectedTab.key - 1 : 1]}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
