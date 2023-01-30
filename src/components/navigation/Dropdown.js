import React, { useState } from "react";

const Dropdown = (props) => {
  const { menuItem, setMenuItem, items, style = {} } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="py-1 my-4 bg-neutral-200 bg-opacity-30 w-full rounded-3xl">
      <div className="flex flex-row justify-between items-center">
        <button
          onClick={() => setMenuItem(menuItem)}
          key={menuItem}
          className="bg-secondary-dark text-neutral-100 text-left ml-2 rounded-3xl w-full h-fit px-2 py-1 transition-all"
        >
          {menuItem.title}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 m-2 stroke-current text-neutral-100 transition-all duration-300 ${open ? "rotate-180" : "rotate-0"}`}
          onClick={() => setOpen(!open)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <nav
          className={`flex flex-col mt-1 overflow-hidden w-full transition-all duration-500 ${open ? "max-h-[1000px]" : "max-h-0"}`}
          style={style}
        >
          {items.map(item => {
            if (item !== menuItem) {
              return (
                <button
                  onClick={() => {
                    setMenuItem(item);
                    setOpen(false);
                  }}
                  key={item.title}
                  className="text-left text-white mx-2 my-[0.1rem] px-2 py-1 transition-all"
                >
                  {item.title}
                </button>
              );
            }
            return <></>
          })}
        </nav>
    </div>
  );
};

export default Dropdown;
