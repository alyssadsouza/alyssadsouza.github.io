import { useMemo } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

export default function Tab({ tab, openTab, setOpenTab }) {
  const isOpen = useMemo(() => openTab === tab.tab, [openTab, tab]);

  return (
    <div className="animate-appear w-full">
      <div
        className={`${
			isOpen ? "max-h-[1000px]" : "max-h-[5.5rem]"
        } transition-all duration-700 overflow-hidden p-8 bg-primary-200 text-light-text bg-opacity-20 w-full rounded-xl`}
      >
        <div className="inline-flex justify-between items-center w-full">
          <h3 className="text-light-text/80 font-light tracking-[0.2em] uppercase font-display">{tab.tab}</h3>
          <ArrowIcon onClick={() => {!isOpen ? setOpenTab(tab.tab) : setOpenTab("")}} className={`w-5 hover:text-primary-200 cursor-pointer transition-all ${isOpen ? "" : "rotate-180"}`} />
        </div>
        <ul className={`my-[2vh] list-disc pl-8 ${!isOpen && "invisible"} transition-all`}>
          {tab?.content.map((item) => (
            <li className="my-4 px-4" key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
