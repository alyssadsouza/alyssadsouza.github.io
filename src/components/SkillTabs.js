import { useEffect, useState } from "react";
import Tab from "./Tab";
import '../App.css';

const getTab = (tab, content) => {
  return content.find((element) => element.tab === tab);
};

export default function SkillTabs({ content }) {
  const [tabName, setTabName] = useState("Front-End");
  const [tab, setTab] = useState(getTab(tabName, content));

  useEffect(() => {
    setTab(getTab(tabName, content));
  }, [tabName, content]);

  const icons = tab.images.map(image => (
    <div key={image} className="p-8  rounded-full border-black border transition-all w-32 h-32">
        <img src={require(`../images/${image}.svg`)} alt="Icon" className="w-full h-full"/>
    </div>
  ));

  return (
    <div className="flex flex-row w-screen justify-between items-center">
      <div id="skill-tabs" className="flex flex-col w-1/2">
        <div id="tab-btns" className="flex flex-row">
          {content.map((tab) => (
            <button
              key={tab.tab}
              onClick={() => setTabName(tab.tab)}
              className={`mr-4 my-4 px-1 py-0.5 text-sm font-display border-2 rounded-full btn-${tab.color}`}
            >
              {tab.tab}
            </button>
          ))}
        </div>
        <Tab key={tab.tab} tab={tab} />
      </div>
      <div id="skill-icons" className="p-16 w-1/2 flex flex-row justify-between">
        {icons}
      </div>
    </div>
  );
}
