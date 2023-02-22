import { useEffect, useState } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

export default function Tab({ tab, defaultOpenState }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(defaultOpenState), 1500);
  }, [defaultOpenState]);

  return (
    <div className="animate-appear">
      <div
        className={`${
          isOpen ? "max-h-[1000px]" : "max-h-[8vh]"
        } transition-all duration-700 overflow-hidden px-[5%] py-[2.25vh] my-[2%] bg-primary-200 text-light-text bg-opacity-20 w-full rounded-xl`}
      >
        <div className="inline-flex justify-between items-center w-full">
          <h3 className="text-[2.5vh] font-display">{tab.tab}</h3>
          <ArrowIcon onClick={() => setIsOpen(!isOpen)} className={`w-5 hover:text-primary-200 cursor-pointer transition-all ${isOpen ? "" : "rotate-180"}`} />
        </div>
        <ul className="my-[2vh] list-disc pl-4">
          {tab?.content.map((item) => (
            <li className="my-4">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
