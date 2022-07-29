import { useEffect, useState } from "react";
import Tab from "./Tab";
import Nav from '../Nav';

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
    <div className='flex flex-col items-center text-black'>
      <Nav
        menuItem={tabName}
        setMenuItem={setTabName}
        items={content.map(tab => tab.tab)}
        style={{"backgroundColor": "#E9EEEF", "margin": 0}}
      />
      <Tab key={tab.tab} tab={tab} />
    </div>
  );
}
