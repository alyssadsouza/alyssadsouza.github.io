import { useEffect, useState } from "react";
import Tab from "./Tab";
import Nav from '../Nav';
import Dropdown from '../Dropdown';

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
    <div className='flex flex-col items-center text-black h-inherit'>
      <div className="hidden sm:block">
        <Nav
          menuItem={tabName}
          setMenuItem={setTabName}
          items={content.map(tab => tab.tab)}
          classes="bg-neutral-200 m-0"
          buttonClasses="hover:bg-primary-150"
        />
      </div>
      <div className="sm:hidden w-full">
        <Dropdown
          menuItem={tabName}
          setMenuItem={setTabName}
          items={content.map(tab => tab.tab)}
          classes="bg-neutral-200 m-0"
        />
      </div>
      <Tab key={tab.tab} tab={tab} />
    </div>
  );
}
