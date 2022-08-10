import React, { useState } from "react";

const Dropdown = (props) => {
  const { menuItem, setMenuItem, items, style } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="py-1 bg-secondary w-full rounded-xl ">
      <div className="flex flex-row justify-between items-center">
        <button
          onClick={() => setMenuItem(menuItem)}
          key={menuItem}
          className="bg-secondary-dark text-neutral-100 ml-2 rounded-xl w-full h-fit px-2 py-1 transition-all cursor-auto"
        >
          {menuItem}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 m-2 cursor-pointer stroke-current text-neutral-100 hover:text-primary-100 transition-all"
          onClick={() => setOpen(!open)}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {!open && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          )}
          {open && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          )}
        </svg>
      </div>
      {open && (
        <nav
          className="flex flex-col mt-1 rounded-xl h-fit w-full slide-down"
          style={style}
        >
          {items.map((item) => {
            if (item !== menuItem) {
              return (
                <button
                  onClick={() => {
                    setMenuItem(item);
                    setOpen(false);
                  }}
                  key={item}
                  className="bg-secondary-dark bg-opacity-30 hover:bg-opacity-50 mx-2 my-[0.1rem] rounded-xl px-2 py-1 transition-all"
                >
                  {item}
                </button>
              );
            }
          })}
        </nav>
      )}
    </div>
  );
};

export default Dropdown;
