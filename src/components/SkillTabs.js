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
    <div key={image} className="p-[5%] animate-appear w-1/2">
        <img src={require(`../images/${image}.svg`)} alt="Icon" className="w-full h-full"/>
    </div>
  ));

  return (
    <div className="flex flex-row w-screen justify-between items-center flex-wrap text-black">
      <div id="tab-btns" className="flex flex-row w-1/2">
        {content.map((tab) => (
          <button
            key={tab.tab}
            onClick={() => setTabName(tab.tab)}
            className={`mr-4 my-4 px-[1%] py-[0.5%] w-full text-sm font-display border-2 rounded-full btn-${tabName === tab.tab ? tab.color +  '-active' : tab.color}`}
          >
            {tab.tab}
          </button>
        ))}
      </div>
      <div className="flex flex-row flex-wrap items-stretch">
        <Tab key={tab.tab} tab={tab} />
        {icons}
      </div>
    </div>
  );
}
