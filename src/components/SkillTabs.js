import { useEffect, useState } from "react";
import Tab from "./Tab";

const getTab = (tab, content) => {
  return content.find((element) => element.tab === tab);
};

export default function SkillTabs({ content }) {
  const [tabName, setTabName] = useState("Front-End");
  const [tab, setTab] = useState(getTab(tabName, content));

  useEffect(() => {
    setTab(getTab(tabName, content));
  }, [tabName, content]);

  return (
    <div className="flex flex-row">
      <div id="skill-tabs" className="flex flex-col">
        <div id="tab-btns" className="flex flex-row">
          {content.map((tab) => (
            <button
              key={tab.tab}
              onClick={() => setTabName(tab.tab)}
              className={`mr-4 my-4 px-1 py-0.5 bg-${tab.color} bg-opacity-${tab.tab === tabName ? '0' : '100'} text-xs text-${tab.tab === tabName ? tab.color : 'black'} font-display border-2 border-${tab.color} rounded-full hover:bg-opacity-0 hover:text-${tab.color} transition-all`}
            >
              {tab.tab}
            </button>
          ))}
        </div>
        <Tab key={tab.tab} tab={tab} />
      </div>
      <div id="skill-icons" className="p-16">
        <h1>Hi</h1>
      </div>
    </div>
  );
}
