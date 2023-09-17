import Tab from "./Tab";
import content from '../../content/skills.json';
import { useState } from "react";

export default function SkillTabs() {
  const [openTab, setOpenTab] = useState("Design");

  return (
    <div className='flex flex-col gap-y-[2vh] items-center text-dark-text h-inherit px-2'>
      {content.map(thisTab => (
        <Tab key={thisTab.tab} tab={thisTab} openTab={openTab} setOpenTab={setOpenTab} />
      ))}
    </div>
  );
}
