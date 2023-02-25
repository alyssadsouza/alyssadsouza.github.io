import Tab from "./Tab";
import content from '../../content/skills.json';

export default function SkillTabs() {

  return (
    <div className='flex flex-col gap-y-[2vh] items-center text-dark-text h-inherit overflow-y-auto scrollbar-dark px-2'>
      {content.map(thisTab => (
        <Tab key={thisTab.tab} tab={thisTab} defaultOpenState={thisTab.tab === "Design"} />
      ))}
    </div>
  );
}
