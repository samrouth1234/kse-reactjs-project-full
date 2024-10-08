import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <>
      <ul className="tabs_list">
        {tabs.map((tab, index) => (
          <li key={tab.key} className={`tabs_item ${activeTab === tab.key ? 'active' : ''}`}>
            <button className={"btn_tabs fw-medium"} onClick={() => handleTabChange(tab.key)}>{tab.label}</button>
          </li>
        ))}
      </ul>
      <div className="tabs_content">
        {tabs.find((tab) => tab.key === activeTab)?.children}
      </div>
    </>
  );
};

export default Tabs;