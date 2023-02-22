import Tab from "./Tab";
import content from '../../content/skills.json';

export default function SkillTabs() {

  return (
    <div className='flex flex-col items-center text-black h-inherit overflow-y-auto dark-scrollbar px-2'>
      {content.map(thisTab => (
        <Tab key={thisTab.tab} tab={thisTab} defaultOpenState={thisTab.tab === "Design"} />
      ))}
    </div>
  );
}
