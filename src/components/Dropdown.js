import React, { useState } from "react";

const Dropdown = (props) => {
  const { menuItem, setMenuItem, items, style } = props;
  const [open, setOpen] = useState(false);
  return (
    <div className="py-2 bg-neutral-200 max-w-[25%] rounded-xl text-sm">
      <div className="flex flex-row justify-between">
        <button
          onClick={() => setMenuItem(menuItem)}
          key={menuItem}
          className="bg-primary text-white ml-2 rounded-full w-full px-2 py-0 transition-all"
        >
          {menuItem}
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 m-2 cursor-pointer"
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
          className="flex flex-col py-1 px-0 rounded-xl h-fit w-full"
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
                  className="hover:bg-neutral-300 bg-neutral-250 mx-2 my-1 rounded-full px-2 transition-all"
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
